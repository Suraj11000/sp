const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.use(cors());

// Multer setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    // Check file extension
    const allowedExtensions = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png'];
    const extname = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(extname)) {
        // Accept the file
        cb(null, true);
    } else {
        // Reject the file
        cb(new Error('Only PDF, DOC, DOCX, JPG, and PNG files are allowed'));
    }
};

const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter
});

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'webtesting780',
        pass: 'mvzcgbjobewtmnxe'
    }
});

// Middleware for parsing JSON bodies
app.use(express.json());

// API endpoint for form submission
app.get("/",(res,req,next)=>{
    res.send("hii");
})

app.post('/form1', upload.single('resume'), (req, res) => {
    // Check for file upload errors
    if (req.fileValidationError) {
        return res.status(400).json({ error: req.fileValidationError });
    } else if (!req.file) {
        return res.status(400).json({ error: 'No resume file uploaded' });
    }

    console.log('Received form submission:', req.body);
    
    // Destructure email and role from req.body
    const { email, role } = req.body;

    // Check if email and role are present
    if (!email || !role) {
        // Delete the uploaded file
        fs.unlinkSync(req.file.path);
        return res.status(400).json({ error: 'Email and role are required' });
    }

    // Read the resume file
    const fileContent = fs.readFileSync(req.file.path);

    // Email configuration
    const mailOptions = {
        from: 'webtesting780@gmail.com',
        to: 'webtesting780@gmail.com',
        subject: 'New Form Submission',
        html: `<p>Email: ${email}</p><p>Role: ${role}</p>`,
        attachments: [
            {
                filename: req.file.originalname,
                content: fileContent
            }
        ]
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        // Delete the uploaded file
        fs.unlinkSync(req.file.path);

        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ message: 'Form submitted successfully' });
        }
    });
});

app.post('/form2', (req, res) => {
    const { fullName, email, subject, message } = req.body;

    // Check if all required fields are present
    if (!fullName || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Email configuration
    const mailOptions = {
        from: 'webtesting780@gmail.com',
        to: 'webtesting780@gmail.com',
        subject: subject,
        text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ message: 'Message sent successfully' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

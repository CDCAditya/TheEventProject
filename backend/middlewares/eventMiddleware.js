

const validateEventData = (req, res, next) => {
    // You can implement validation logic here using a library like Joi or express-validator
    // For simplicity, let's assume basic validation
    const {title,mentorName,category,DateAndTime,location,eventType,Highlight,Button,upcoming,preRecorded,image} = req.body;
    if (title || mentorName || category || DateAndTime || location || eventType || Highlight || Button || upcoming || preRecorded || image) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    next();
};

export  { validateEventData};
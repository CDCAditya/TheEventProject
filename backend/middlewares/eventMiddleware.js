

const validateEventData = (req, res, next) => {
    // You can implement validation logic here using a library like Joi or express-validator
    // For simplicity, let's assume basic validation
    const {title,mentorName,email,category,DateAndTime,location,eventType,Highlight,Button,image,link,description,host,sponsors,tragetaudience} = req.body;
    if (title || mentorName|| email || category || DateAndTime || location || eventType || Highlight || Button || image || link || description || host || sponsors || tragetaudience) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    next();
};

export  { validateEventData};
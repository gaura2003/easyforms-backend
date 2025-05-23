/**
 * Middleware to check if the authenticated user is an admin
 */
module.exports = async (req, res, next) => {
  try {
    // Check if user has admin role
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admin privileges required.' });
    }
    
    next();
  } catch (error) {
    console.error('Admin middleware error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
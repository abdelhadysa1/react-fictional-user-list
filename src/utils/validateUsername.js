const validateUsername = (username) => username && typeof username === 'string' && username.trim().length > 0
export default validateUsername
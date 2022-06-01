const validateAge = (age) => age && typeof age === 'number' && age > 0 && age < 100
export default validateAge
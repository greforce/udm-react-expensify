export default (expenses) => (
  expenses.reduce((total, current) => total + current.amount, 0)
)

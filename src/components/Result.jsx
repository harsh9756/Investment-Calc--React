import { calculateInvestmentResults,formatter } from '../util/investment'
export default function Result({ inputs }) {
  const result = calculateInvestmentResults(inputs)
  const initialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Interested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((item) => {
          const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;
          const totalAmountInt = item.valueEndOfYear - totalInterest;
          return (  
            <tr>
            <td>{item.year}</td>
            <td>{formatter.format(item.valueEndOfYear)}</td>
            <td>{formatter.format(item.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInt)}</td>
          </tr>
        )
        })}
      </tbody>
    </table >
  )
}

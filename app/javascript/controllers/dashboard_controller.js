import "chart.js"
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { revenue: Array }

  connect() {
    const Chart = window.Chart
    const labels = this.revenueValue.map((item) => item[0])
    const data = this.revenueValue.map((item) => item[1]/100.0)

    const ctx = this.element.querySelector("#revenueChart").getContext("2d")
    new Chart(ctx, {
         type: 'line',
         data: {
           labels: labels,
           datasets: [{
             label: 'Revenue $',
             data: data,
             borderWidth: 3,
             fill: true
           }]
         },
         options: {
           plugins: {
             legend: {
               display: false
             }
           },
           scales: {
             x: {
               grid: {
                 display: false
               }
             },
             y: {
               border: {
                 dash: [5, 5]
               },
               grid: {
                 color: "#d4f3ef"
               },
               beginAtZero: true
             }
           }
         }
       })
  }
}

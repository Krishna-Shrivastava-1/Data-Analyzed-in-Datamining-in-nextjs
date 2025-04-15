// "use client"

// import { TrendingUp } from "lucide-react"
// import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"
// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ]

// const chartConfig = {
//     currentscore: {
//       label: "Current Exam Score ",
//       color: "#1c6535", // Emerald-600
//     },
//     previousscore: {
//       label: "Previous Exam Score ",
//       color: "#0da949", // Emerald-400
//     },
//   }
// import data from '../StudentPerformanceData.json'
// export function Linelinearchart() {
//      const cleanData = data.map((e)=>{
//         return {
           
//             previousscore:e.Previous_Scores,
//             currentscore:e.Exam_Score
//         }
//     })
//     console.log(cleanData)
//   return (
//     <Card className='dark'>
//       <CardHeader>
//         <CardTitle>Overall Student Progress</CardTitle>
//         <CardDescription>
//           Showing total visitors for the last 6 months
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer config={chartConfig}>
//           <AreaChart
//             accessibilityLayer
//             data={cleanData.slice(0,90)}
//             margin={{
//               left: 12,
//               right: 12,
//             }}
//           >
//             <CartesianGrid vertical={false} />
//             <XAxis
//               dataKey="month"
//               tickLine={false}
//               axisLine={false}
//               tickMargin={8}
//               tickFormatter={(value) => value.slice(0, 3)}
//             />
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent indicator="dot" />}
//             />
//             <Area
//               dataKey="currentscore"
//               type="monotone"
//               fill="var(--color-currentscore)"
//               fillOpacity={0.4}
//               stroke="var(--color-currentscore)"
//               stackId="a"
//             />
//             <Area
//               dataKey="previousscore"
//               type="monotone"
//               fill="var(--color-previousscore)"
//               fillOpacity={0.4}
//               stroke="var(--color-previousscore)"
//               stackId="a"
//             />
            
//           </AreaChart>
//         </ChartContainer>
//       </CardContent>
//       <CardFooter>
//         <div className="flex w-full items-start gap-2 text-sm">
//           <div className="grid gap-2">
//             <div className="flex items-center gap-2 font-medium leading-none">
//               Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//             </div>
//             <div className="flex items-center gap-2 leading-none text-muted-foreground">
//               January - June 2024
//             </div>
//           </div>
//         </div>
//       </CardFooter>
//     </Card>
//   )
// }


"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    currentscore: {
      label: "Current Exam Score ",
      color: "#0781a3", // Emerald-600
    },
    previousscore: {
      label: "Previous Exam Score ",
      color: "#0da949", // Emerald-400
    },
  }
import data from '../StudentPerformanceData.json'
export function Linelinearchart() {
         const cleanData = data.map((e)=>{
        return {
           
            previousscore:e.Previous_Scores,
            currentscore:e.Exam_Score
        }
    })
    // console.log(cleanData)
  return (
    <Card className='dark'>
      <CardHeader>
        <CardTitle>Overall Student Progress According to his Last marks and Current Marks</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
        <LineChart
  accessibilityLayer
  data={cleanData.slice(0,90)}
  margin={{
    left: 12,
    right: 12,
  }}
>
  <CartesianGrid vertical={false} />
  <XAxis
    dataKey="month"
    tickLine={false}
    axisLine={false}
    tickMargin={8}
    tickFormatter={(value) => value.slice(0, 3)}
  />
  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
  <Line
    dataKey="currentscore"
    type="monotone"
    stroke={chartConfig.currentscore.color}
    strokeWidth={2.5}
    dot={false}
  />
  <Line
    dataKey="previousscore"
    type="monotone"
    stroke={chartConfig.previousscore.color}
    strokeWidth={2.5}
    dot={false}
  />
</LineChart>

        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  )
}

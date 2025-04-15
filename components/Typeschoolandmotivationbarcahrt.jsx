


"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


const chartConfig = {
  desktop: {
    label: "Student",
    color: "#098637",
  },
  mobile: {
    label: "Attendance",
    color: "#125427",
  },
}
import data from '../StudentPerformanceData.json'
export function Typeschoolandmotivationbarcahrt() {
    const cleandat = data.map((e)=>{
                return e
            })
            // console.log(cleandat)
            const filterpub = cleandat.filter((e)=>e.School_Type === 'Public' && e.Attendance)
            const pubattend = filterpub.map((e)=>Number(e.Attendance))
            // console.log(filterpub)
            // console.log(pubattend)
            const totalpubatt = pubattend.reduce((acc,curr)=>acc+curr,0)
            const finalpubatt = totalpubatt/filterpub.length 
         
            const filterpriv = cleandat.filter((e)=>e.School_Type === 'Private'&& e.Attendance)
            const privattend = filterpriv.map((e)=>Number(e.Attendance))
            // console.log(filterpriv)
            // console.log(privattend)
            const totalprivatt = privattend.reduce((acc,curr)=>acc+curr,0)
            const finalprivat = totalprivatt/filterpriv.length 
            
            // console.log(filterpriv.length)
    const chartData = [
       { month: "Public", desktop: filterpub.length ,mobile: finalpubatt },
        { month: "Private", desktop: filterpriv.length , mobile: finalprivat },
       
      ]
  return (
    <Card className='dark'>
      <CardHeader>
        <CardTitle>Public and Private School Attendance</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            //   tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="desktop"
              stackId="a"
              fill="var(--color-desktop)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="mobile"
              stackId="a"
              fill="var(--color-mobile)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  )
}

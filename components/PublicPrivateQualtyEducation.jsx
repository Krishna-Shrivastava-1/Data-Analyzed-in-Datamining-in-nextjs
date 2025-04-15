


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
    label: "High quality",
    color: "#098637",
  },
  mobile: {
    label: "Medium quality",
    color: "#0a702b",
  },
  low: {
    label: "Low quality",
    color: "#125427",
  },
}
import data from '../StudentPerformanceData.json'
export function PublicPrivateQualtyEducation() {
    const cleandat = data.map((e)=>{
                return e
            })
            // console.log(cleandat)
            const filterpub = cleandat.filter((e)=>e.School_Type === 'Public' && e.Attendance)
            const pubattend = filterpub.map((e)=>e.Teacher_Quality)
            // console.log(filterpub)
            // console.log(pubattend)
            
            const totalpubqualHigh = pubattend.filter((e)=>e === "High")
            const totalpubqualLow = pubattend.filter((e)=>e === "Low")
            const totalpubqualMedium = pubattend.filter((e)=>e === "Medium")
        //  console.log(totalpubqualHigh.length)
        //  console.log(totalpubqualMedium.length)
        //  console.log(totalpubqualLow.length)
         
            const filterpriv = cleandat.filter((e)=>e.School_Type === 'Private'&& e.Attendance)
            const privattend = filterpriv.map((e)=>e.Teacher_Quality)
            // console.log(filterpriv)
            // console.log(privattend)
            // console.log(privattend)
            
            const totalprivqualHigh = privattend.filter((e)=>e === "High")
            const totalprivqualLow = privattend.filter((e)=>e === "Low")
            const totalprivqualMedium = privattend.filter((e)=>e === "Medium")
        //  console.log(totalprivqualHigh.length)
        //  console.log(totalprivqualMedium.length)
        //  console.log(totalprivqualLow.length) 
            
            // console.log(filterpriv.length)
    const chartData = [
       { month: "Public", desktop: totalpubqualHigh.length ,mobile: totalpubqualMedium.length,low:totalpubqualLow.length},
        { month: "Private", desktop: totalprivqualHigh.length , mobile: totalprivqualMedium.length,low:totalprivqualLow.length },
       
      ]
  return (
    <Card className='dark'>
      <CardHeader>
        <CardTitle>Public and Private School Teacher Quality</CardTitle>
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
            <Bar
              dataKey="low"
              stackId="a"
              fill="var(--color-low)"
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

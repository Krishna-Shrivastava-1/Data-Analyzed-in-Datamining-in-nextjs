


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

  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


const chartConfig = {
  desktop: {
    label: "Male",
    color: "#098637",
  },
 
  low: {
    label: "Female",
    color: "#125427",
  },
}
import data from '../StudentPerformanceData.json'
export function GendersineachSchool() {
    const cleandat = data.map((e)=>{
                return e
            })
         
            const filterpub = cleandat.filter((e)=>e.School_Type === 'Public' && e.Attendance)
            const pubattend = filterpub.map((e)=>e.Gender)
         
            
            const totalpubqualMale = pubattend.filter((e)=>e === "Male")
            const totalpubqualFemale = pubattend.filter((e)=>e === "Female")
         
         console.log(totalpubqualMale.length)
         console.log(totalpubqualFemale.length)
       
         
            const filterpriv = cleandat.filter((e)=>e.School_Type === 'Private'&& e.Attendance)
            const privattend = filterpriv.map((e)=>e.Gender)
          
            
            const totalprivqualMale =privattend.filter((e)=>e === "Male")
            const totalprivqualFemale =  privattend.filter((e)=>e === "Female")
      
   
    const chartData = [
       { month: "Public", desktop: totalpubqualMale.length,low:totalpubqualFemale.length},
        { month: "Private", desktop: totalprivqualMale.length , low:totalprivqualFemale.length },
       
      ]
  return (
    <Card className='dark'>
      <CardHeader>
        <CardTitle>Public and Private School Gender</CardTitle>
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

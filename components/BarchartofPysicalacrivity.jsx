'use client'
import React from 'react'
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import data from '../StudentPerformanceData.json'
const chartConfig = {
  desktop: {
    label: "Physical Activity",
    color: "#093b1c",
  },
}
const BarchartofPhysicalacrivity = () => {
    const cleandat = data.map((e)=>{
        return e
    })
    // console.log(cleandat);
    
    const filterpub = cleandat.filter((e)=>e.School_Type === 'Public' && e.Physical_Activity)
//    console.log(filterpub)
   const addpubphysic = filterpub.map((e)=>Number(e.Physical_Activity))
//    console.log(addpubphysic)
   const finaltotofpubphysic = addpubphysic.reduce((acc,curr)=>acc+curr ,0)
//    console.log(finaltotofpubphysic)
    const filterpriv = cleandat.filter((e)=>e.School_Type === 'Private' &&e.Physical_Activity)
    const addprivphysic = filterpriv.map((e)=>Number(e.Physical_Activity))
    const finaltotofprivphysic = addprivphysic.reduce((acc,curr)=>acc+curr ,0)
    // console.log(finaltotofprivphysic)
    // console.log(filterpriv.length)
    const chartData = [
        { month: "Public", desktop: finaltotofpubphysic },
        { month: "Private", desktop: finaltotofprivphysic },
  
      ]
  return (
    <Card className='dark'>
      <CardHeader>
        <CardTitle>Total School Physical Activities</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            //   tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
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

export default BarchartofPhysicalacrivity
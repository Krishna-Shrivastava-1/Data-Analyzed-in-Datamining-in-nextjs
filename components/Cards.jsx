'use client'

import React from 'react'
import data from '../StudentPerformanceData.json'
import { Badge } from './ui/badge'
import { IconTrendingUp } from '@tabler/icons-react';
const Cards = () => {
const totattendance = data.map((e)=>{
    return Number(e.Attendance)
})
// console.log(totattendance)
const avgofatt = totattendance.reduce((acc,curr)=>acc+curr,0)
const avgoffinalattendance = avgofatt/totattendance.length
// console.log(avgoffinalattendance)
const totexamnum = data.map((e)=>{
    return Number(e.Exam_Score)
})
// console.log(totexamnum)
const avgofexnum = totexamnum.reduce((acc,curr)=>acc+curr,0)
const avgoffinalexamnum = avgofexnum/totexamnum.length
// console.log(avgoffinalexamnum)
    return (
      <div className='w-full flex items-center justify-center flex-wrap'>
          <div className='border-zinc-700 border rounded-md bg-zinc-900 text-white p-2 m-2'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-sm text-zinc-300'>Total Students</h1>
                <Badge variant="outline" className='text-white font-bold ml-8 border-zinc-500'><IconTrendingUp className='text-white text-xl' />+12.5%</Badge>
            </div>

            <span className='text-white font-bold text-4xl'>{data.length}</span>
            <p className='text-sm'>Trending up this month</p>
        </div>
        <div className='border-zinc-700 border rounded-md bg-zinc-900 text-white p-2 m-2'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-sm text-zinc-300'>Attendance Rate</h1>
                <Badge variant="outline" className='text-white font-bold ml-8 border-zinc-500'><IconTrendingUp className='text-white text-xl' />+8.5%</Badge>
            </div>

            <span className='text-white font-bold text-4xl'>{avgoffinalattendance.toFixed(2)}%</span>
            <p className='text-sm'>Overall attendance rate</p>
        </div>
        <div className='border-zinc-700 border rounded-md bg-zinc-900 text-white p-2 m-2'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-sm text-zinc-300'>New Anouncement</h1>
              
            </div>

            <span className='text-white font-bold text-4xl'>7</span>
            <p className='text-sm'>Last school update</p>
        </div>
        <div className='border-zinc-700 border rounded-md bg-zinc-900 text-white p-2 m-2'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-sm text-zinc-300'>Average Score</h1>
                <Badge variant="outline" className='text-white font-bold ml-8 border-zinc-500'><IconTrendingUp className='text-white text-xl' />+8.5%</Badge>
            </div>

            <span className='text-white font-bold text-4xl'>{avgoffinalexamnum.toFixed(2)}%</span>
            <p className='text-sm'>Overall attendance rate</p>
        </div>
      </div>
    )
}

export default Cards
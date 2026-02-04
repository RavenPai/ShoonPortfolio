"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { semester: "1st Yr - Sem 1", gpa: 3.9 },
    { semester: "1st Yr - Sem 2", gpa: 3.75 },
    { semester: "2nd Yr - Sem 1", gpa: 3.84 },
    { semester: "2nd Yr - Sem 2", gpa: 3.79 },
    { semester: "3rd Yr - Sem 1", gpa: 3.72 },
    { semester: "3rd Yr - Sem 2", gpa: 3.58 },
]

const chartConfig = {
    gpa: {
        label: "GPA",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function GPAChart() {
    return (
        <Card className="mt-8 border-none bg-slate-50/50 shadow-none dark:bg-slate-900/50">
            <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Academic Performance
                </CardTitle>
                <CardDescription className="text-slate-500 dark:text-slate-400">
                    Semester-wise GPA Analysis
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            top: 20,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="semester"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)} // Show "1st", "2nd" etc.
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="gpa" fill="var(--color-gpa)" radius={8}>
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
                <div className="mt-4 flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                            Overall GPA
                        </span>
                        <span className="text-2xl font-bold text-slate-900 dark:text-white">
                            3.76
                        </span>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-emerald-100 p-2 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-full w-full"
                        >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

"use client"

import { useState } from "react"
import { AirVent, Refrigerator, WashingMachine, Lightbulb, ChevronLeft } from "lucide-react"

interface Device {
  id: string
  name: string
  status: "ON" | "OFF"
  consumption: number
  icon: any
}

const initialDevices: Device[] = [
  { id: "1", name: "کولر گازی", status: "ON", consumption: 2.5, icon: AirVent },
  { id: "2", name: "یخچال", status: "ON", consumption: 0.8, icon: Refrigerator },
  { id: "3", name: "ماشین لباسشویی", status: "OFF", consumption: 0, icon: WashingMachine },
  { id: "4", name: "سیستم روشنایی", status: "ON", consumption: 0.5, icon: Lightbulb },
]

export function DeviceList() {
  const [devices, setDevices] = useState(initialDevices)

  const toggleDevice = (id: string) => {
    setDevices(
      devices.map((device) => {
        if (device.id === id) {
          const newStatus = device.status === "ON" ? "OFF" : "ON"
          return {
            ...device,
            status: newStatus,
            consumption: newStatus === "OFF" ? 0 : device.consumption || 1.0,
          }
        }
        return device
      }),
    )
  }

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-sm">
      <h2 className="text-xl font-bold text-slate-800 mb-6">دستگاه‌های فعال</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">دستگاه</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-slate-700">وضعیت</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-slate-700">مصرف</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device, index) => {
              const Icon = device.icon
              const isEven = index % 2 === 0

              return (
                <tr
                  key={device.id}
                  className={`border-b border-slate-100 transition-colors duration-200 hover:bg-slate-50/50 ${isEven ? "bg-slate-50/30" : ""}`}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${device.status === "ON" ? "bg-blue-100" : "bg-slate-100"}`}
                      >
                        <Icon className={`w-5 h-5 ${device.status === "ON" ? "text-blue-600" : "text-slate-400"}`} />
                      </div>
                      <span className="font-medium text-slate-800">{device.name}</span>
                    </div>
                  </td>

                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${device.status === "ON" ? "bg-green-500" : "bg-slate-300"}`}
                      ></div>
                      <span
                        className={`text-sm font-medium ${device.status === "ON" ? "text-green-600" : "text-slate-500"}`}
                      >
                        {device.status === "ON" ? "روشن" : "خاموش"}
                      </span>
                    </div>
                  </td>

                  <td className="py-4 px-4 text-center">
                    <span className="text-sm font-semibold text-slate-700">
                      {device.consumption.toFixed(1)} کیلووات
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => toggleDevice(device.id)}
                        className={`
                          relative w-14 h-7 rounded-full transition-all duration-300 shadow-inner
                          ${device.status === "ON" ? "bg-blue-500" : "bg-slate-300"}
                        `}
                      >
                        <div
                          className={`
                          absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300
                          ${device.status === "ON" ? "left-0.5" : "right-0.5"}
                        `}
                        ></div>
                      </button>

                      <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 flex items-center gap-1">
                        جزئیات
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

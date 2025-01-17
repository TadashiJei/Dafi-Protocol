import { Card, CardContent } from "@/components/ui/card"

interface ChartTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
  }>;
  label?: string;
}

export function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  return (
    <Card className="bg-black/80 border-green-900/50 backdrop-blur-sm">
      <CardContent className="py-2 px-3">
        <p className="text-sm font-medium text-green-400">{label}</p>
        {payload.map((item, index) => (
          <p key={index} className="text-xs text-gray-300">
            {item.name}: {item.value}
          </p>
        ))}
      </CardContent>
    </Card>
  )
}

export function ChartContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-full ${className}`}>
      {children}
    </div>
  )
}


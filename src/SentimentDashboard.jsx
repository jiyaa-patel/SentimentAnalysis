import React, { useMemo } from "react";
import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  ReferenceLine,
} from "recharts";
import {
  ThumbsUp,
  ThumbsDown,
  Minus,
  Filter,
  Clock,
  MessageCircle,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

/**
 * React Sentiment Dashboard (JSX)
 * - TailwindCSS for styling
 * - lucide-react for icons
 * - Recharts for charts
 */

// ----------------------------- Mock Data ------------------------------

// Example daily time-series (two months). In your app, wire this to your API results.
const TIME_SERIES = Array.from({ length: 100}).map((_, i) => {
  const day = new Date();
  day.setDate(day.getDate() - (27 - i));
  const label = day.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" }).slice(0, 10);
  // Random-ish split
  const pos = Math.floor(20 + Math.random() * 50);
  const neg = Math.floor(10 + Math.random() * 35);
  const neu = Math.floor(5 + Math.random() * 20);
  return { date: label, positive: pos, negative: neg, neutral: neu };
});

// Topic-level sentiment distribution (percentages). Ensure each row sums to 100.
const TOPIC_ROWS = [
  { topic: "Definitions", positive: 40, neutral: 30, negative: 30 },
  { topic: "Compliance", positive: 33, neutral: 40, negative: 27 },
  { topic: "Penalties", positive: 28, neutral: 32, negative: 40 },
  { topic: "Jurisdiction", positive: 45, neutral: 25, negative: 30 },
  { topic: "Privacy", positive: 35, neutral: 20, negative: 45 },
  { topic: "Timelines", positive: 30, neutral: 50, negative: 20 },
];

// Recent comments feed
const RECENT_COMMENTS = [
  {
    id: "c1",
    author: "Anita S.",
    text: "Section 7 is clear but clause (2) is confusing; please clarify scope.",
    sentiment: "neutral",
    confidence: 0.72,
    createdAt: new Date(Date.now() - 1000 * 60 * 20).toISOString(),
  },
  {
    id: "c2",
    author: "Govind P.",
    text: "Love the compliance simplification—this will reduce SME burden a lot.",
    sentiment: "positive",
    confidence: 0.89,
    createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
  },
  {
    id: "c3",
    author: "Rita D.",
    text: "The penalties are disproportionate; consider graded warnings first.",
    sentiment: "negative",
    confidence: 0.83,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
  },
  {
    id: "c4",
    author: "A. Kumar",
    text: "Ambiguous definitions could invite litigation; examples may help.",
    sentiment: "negative",
    confidence: 0.61,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
  },
];

// --------------------------- Utilities -------------------------------

const SENTIMENT_COLORS = {
  positive: "#16a34a", // Tailwind emerald-600
  neutral: "#6b7280",  // Tailwind gray-500
  negative: "#dc2626", // Tailwind red-600
};

function pct(num, den) {
  if (den <= 0) return 0;
  return Math.round((num / den) * 100);
}

function formatK(n) {
  return n > 999 ? `${(n / 1000).toFixed(1)}k` : `${n}`;
}

function controversyIndex(row) {
  return Math.abs(row.positive - row.negative); // lower => more mixed
}

function toWeekly(data) {
  // Very simple weekly binning by 7s for demo purposes
  const out = [];
  for (let i = 0; i < data.length; i += 7) {
    const chunk = data.slice(i, i + 7);
    const sum = chunk.reduce(
      (acc, d) => {
        acc.positive += d.positive;
        acc.negative += d.negative;
        acc.neutral += d.neutral;
        return acc;
      },
      { positive: 0, negative: 0, neutral: 0 }
    );
    const label = `${chunk[0]?.date} → ${chunk[chunk.length - 1]?.date}`;
    out.push({ week: label, ...sum });
  }
  return out;
}

// ---------------------------- Components -----------------------------

function KPIChip({ label, value, icon }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-gray-200/60 bg-white px-3 py-2 shadow-sm">
      {icon && <div className="opacity-70">{icon}</div>}
      <div className="text-sm text-gray-500">{label}</div>
      <div className="ml-auto font-semibold">{value}</div>
    </div>
  );
}

function SentimentPill({ s }) {
  const color = SENTIMENT_COLORS[s];
  const label = s[0].toUpperCase() + s.slice(1);
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium"
      style={{ background: `${color}1a`, color }}
    >
      {s === "positive" && <ThumbsUp className="h-3 w-3" />}
      {s === "neutral" && <Minus className="h-3 w-3" />}
      {s === "negative" && <ThumbsDown className="h-3 w-3" />}
      {label}
    </span>
  );
}

// Custom tooltip for stacked charts
function StackedTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;
  const pos = payload.find((p) => p.dataKey === "positive")?.value || 0;
  const neu = payload.find((p) => p.dataKey === "neutral")?.value || 0;
  const neg = payload.find((p) => p.dataKey === "negative")?.value || 0;
  const total = pos + neu + neg;
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-3 text-xs shadow-md">
      <div className="mb-1 font-medium">{label}</div>
      <div className="flex items-center gap-2">
        <span className="inline-block h-2 w-2 rounded" style={{ background: SENTIMENT_COLORS.positive }} />
        Positive: <b>{pos}</b> ({pct(pos, total)}%)
      </div>
      <div className="flex items-center gap-2">
        <span className="inline-block h-2 w-2 rounded" style={{ background: SENTIMENT_COLORS.neutral }} />
        Neutral: <b>{neu}</b> ({pct(neu, total)}%)
      </div>
      <div className="flex items-center gap-2">
        <span className="inline-block h-2 w-2 rounded" style={{ background: SENTIMENT_COLORS.negative }} />
        Negative: <b>{neg}</b> ({pct(neg, total)}%)
      </div>
      <div className="mt-1 border-t pt-1">Total: <b>{total}</b></div>
    </div>
  );
}

// Center label for donut
function CenterKPI({ total, pos, neg }) {
  const net = pos - neg; // Net Sentiment
  const posPct = pct(pos, total);
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="text-xs uppercase tracking-wide text-gray-500">Net Sentiment</div>
      <div className={`text-2xl font-bold ${net >= 0 ? "text-emerald-600" : "text-red-600"}`}>
        {net >= 0 ? `+${net}` : net}
      </div>
      <div className="text-[11px] text-gray-500">{posPct}% Positive</div>
    </div>
  );
}

export default function SentimentDashboard() {
  const [sentimentFilter, setSentimentFilter] = useState("all");

  // acc - pos neg neut sum
  //total - total
  //data - pos: , value: , key
  const donut = useMemo(() => {
    const sum = TIME_SERIES.reduce(
      (acc, d) => {
        acc.positive += d.positive;
        acc.neutral += d.neutral;
        acc.negative += d.negative;
        return acc;
      }, 
      { positive: 0, neutral: 0, negative: 0 }
    );
    const total = sum.positive + sum.neutral + sum.negative;
    const data = [
      { name: "Positive", value: sum.positive, key: "positive" },
      { name: "Neutral", value: sum.neutral, key: "neutral" },
      { name: "Negative", value: sum.negative, key: "negative" },
    ];
    return { data, total, ...sum };
  }, []);

  // Filtered series for bar chart
  const filteredSeries = useMemo(() => {
    if (sentimentFilter === "all") return TIME_SERIES;
    return TIME_SERIES.map((d) => ({
      ...d,
      positive: sentimentFilter === "positive" ? d.positive : 0,
      neutral: sentimentFilter === "neutral" ? d.neutral : 0,
      negative: sentimentFilter === "negative" ? d.negative : 0,
    }));
  }, [sentimentFilter]);

  const useWeekly = TIME_SERIES.length > 35; // demo switch
  const seriesForChart = useWeekly ? toWeekly(filteredSeries) : filteredSeries;

  // Butterfly data (negative values to the left, positive to the right; neutrals centered via ReferenceLine)
  const butterfly = useMemo(() => {
    const sorted = [...TOPIC_ROWS].sort((a, b) => controversyIndex(a) - controversyIndex(b));
    return sorted.map((r) => ({
      topic: r.topic,
      neg: -r.negative, // negative direction
      pos: r.positive,  // positive direction
      neu: r.neutral,
    }));
  }, []);

  const totalComments = donut.total;
  const posPct = pct(donut.positive, donut.total);
  const negPct = pct(donut.negative, donut.total);
  const net = donut.positive - donut.negative;
  const lowConfidenceRate = Math.round(
    100 * (RECENT_COMMENTS.filter((c) => c.confidence < 0.7).length / RECENT_COMMENTS.length)
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Consultation Sentiment</h1>
          <p className="text-sm text-gray-600">Interactive snapshot, trends, hotspots, and triage.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-full border bg-white px-3 py-1.5 text-sm shadow-sm">
            <span className="mr-2 text-gray-500">Sentiment filter</span>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm shadow-sm">
            <Filter className="h-4 w-4" />
            More filters
          </button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
        <KPIChip label="Total" value={formatK(totalComments)} icon={<MessageCircle className="h-4 w-4" />} />
        <KPIChip label="% Positive" value={`${posPct}%`} icon={<TrendingUp className="h-4 w-4" />} />
        <KPIChip label="% Negative" value={`${negPct}%`} icon={<TrendingDown className="h-4 w-4" />} />
        <KPIChip label="Net Sentiment" value={(net >= 0 ? "+" : "") + net} />
        <KPIChip label="Low-confidence" value={`${lowConfidenceRate}%`} />
        <KPIChip
          label="Range"
          value={`${TIME_SERIES[0].date} → ${TIME_SERIES[TIME_SERIES.length - 1].date}`}
          icon={<Clock className="h-4 w-4" />}
        />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Donut Snapshot */}
        <div className="relative rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <div className="text-sm font-semibold">Overall snapshot</div>
            <div className="text-xs text-gray-500">Click a slice to filter</div>
          </div>
          <div className="relative h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donut.data}
                  innerRadius={70}
                  outerRadius={100}
                  dataKey="value"
                  nameKey="name"
                  paddingAngle={2}
                  onClick={(entry) => setSentimentFilter(entry.key)}
                >
                  {donut.data.map((entry) => (
                    <Cell
                      key={entry.name}
                      fill={SENTIMENT_COLORS[entry.key]}
                      className="cursor-pointer opacity-90 hover:opacity-100"
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(v, n) => [v, n]} />
              </PieChart>
            </ResponsiveContainer>
            <CenterKPI total={donut.total} pos={donut.positive} neg={donut.negative} />
          </div>
          <div className="mt-3 grid grid-cols-3 text-xs">
            {donut.data.map((d) => (
              <div key={d.name} className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded" style={{ background: SENTIMENT_COLORS[d.key] }} />
                <span>{d.name}</span>
                <span className="ml-auto font-medium">{d.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trend Over Time */}
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm lg:col-span-2">
          <div className="mb-2 flex items-center justify-between">
            <div className="text-sm font-semibold">How it evolved</div>
            <div className="text-xs text-gray-500">{useWeekly ? "Weekly bins" : "Daily bins"}</div>
            <div>
            <select
              className="focus:outline-none"
              value={sentimentFilter}
              onChange={(e) => setSentimentFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="positive">Positive</option>
              <option value="neutral">Neutral</option>
              <option value="negative">Negative</option>
            </select>
            </div>
            
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={seriesForChart} margin={{ left: 10, right: 10, top: 5, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={useWeekly ? "week" : "date"} tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip content={<StackedTooltip />} />
                <Area
                  type="monotone"
                  dataKey="negative"
                  stackId="1"
                  stroke={SENTIMENT_COLORS.negative}
                  fill={SENTIMENT_COLORS.negative}
                  fillOpacity={0.2}
                />
                <Area
                  type="monotone"
                  dataKey="neutral"
                  stackId="1"
                  stroke={SENTIMENT_COLORS.neutral}
                  fill={SENTIMENT_COLORS.neutral}
                  fillOpacity={0.2}
                />
                <Area
                  type="monotone"
                  dataKey="positive"
                  stackId="1"
                  stroke={SENTIMENT_COLORS.positive}
                  fill={SENTIMENT_COLORS.positive}
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Butterfly / Diverging Bars */}
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm lg:col-span-2">
          <div className="mb-2 text-sm font-semibold">Where the heat is (topics)</div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={butterfly} layout="vertical" margin={{ left: 20, right: 20, top: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[-100, 100]} tickFormatter={(v) => `${Math.abs(v)}`} />
                <YAxis type="category" dataKey="topic" width={110} />
                <Tooltip
                  formatter={(v, name) => [
                    Math.abs(v) + "%",
                    name === "neg" ? "Negative" : name === "pos" ? "Positive" : "Neutral",
                  ]}
                />
                <ReferenceLine x={0} stroke="#e5e7eb" />
                <Bar dataKey="neg" name="Negative" stackId="stack" fill={SENTIMENT_COLORS.negative} />
                <Bar dataKey="pos" name="Positive" stackId="stack" fill={SENTIMENT_COLORS.positive} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Sorted by controversy index (|Positive − Negative| ascending) so mixed topics float to the top.
          </div>
        </div>

        {/* Triage: Recent Comments */}
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="mb-2 text-sm font-semibold">Recent comments</div>
          <div className="flex flex-col gap-3">
            {RECENT_COMMENTS.map((c) => (
              <div key={c.id} className="rounded-xl border border-gray-200 p-3">
                <div className="mb-1 flex items-center justify-between text-xs text-gray-500">
                  <span>{new Date(c.createdAt).toLocaleString()}</span>
                  <SentimentPill s={c.sentiment} />
                </div>
                <div className="text-sm">{c.text}</div>
                <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                  <span>
                    by <b>{c.author}</b>
                  </span>
                  <span className="rounded-full bg-gray-100 px-2 py-0.5">Conf: {Math.round(c.confidence * 100)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-6 text-center text-xs text-gray-500">
        Click the donut to filter, hover charts for tooltips. Replace mock data with your API results.
      </div>
    </div>
  );
}

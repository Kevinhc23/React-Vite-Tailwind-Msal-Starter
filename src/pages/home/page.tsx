import type { FC } from "react";
import {
  Plus,
  Activity,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  DatabaseZap,
} from "lucide-react";
import { motion } from "motion/react";

type HomePageProps = {};

const HomePage: FC<HomePageProps> = () => {
  return (
    <div className="flex flex-col gap-8 w-full h-full overflow-y-auto p-6 md:p-8 lg:p-12 bg-zinc-50/50 relative">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 via-primary/5 to-transparent pointer-events-none -z-10" />

      <header className="flex flex-col gap-1.5 md:flex-row md:items-end md:justify-between z-10">
        <div className="flex flex-col gap-1.5">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl text-zinc-900 tracking-tight font-semibold"
          >
            Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 font-medium"
          >
            Welcome to your new modern workspace.
          </motion.p>
        </div>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 md:mt-0 px-4 py-2 bg-zinc-900 text-white rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm active:scale-95"
        >
          <Plus className="size-4" />
          Add Widget
        </motion.button>
      </header>

      {/* Grid for KPIs or Top Level Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
        {[
          {
            title: "Platform Traffic",
            value: "24.5k",
            icon: Activity,
            delta: "+12.5%",
          },
          {
            title: "Query Performance",
            value: "45ms",
            icon: DatabaseZap,
            delta: "-2.3ms",
          },
          {
            title: "Security Score",
            value: "98/100",
            icon: ShieldCheck,
            delta: "Stable",
          },
        ].map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-zinc-100 rounded-lg group-hover:bg-primary/10 transition-colors">
                  <Icon className="size-5 text-zinc-600 group-hover:text-primary transition-colors" />
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  <ArrowUpRight className="size-3" />
                  {metric.delta}
                </span>
              </div>
              <div>
                <h2 className="text-sm font-medium text-zinc-500 mb-1">
                  {metric.title}
                </h2>
                <p className="text-3xl font-semibold tracking-tight text-zinc-900">
                  {metric.value}
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          );
        })}
      </div>

      {/* Main Data View Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden flex flex-col justify-center items-center h-96 w-full z-10 hover:shadow-md transition-shadow duration-300"
      >
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

        <div className="z-10 flex flex-col items-center gap-4 text-center">
          <div className="p-4 bg-zinc-50 rounded-2xl shadow-sm border border-zinc-100 border-dashed">
            <Layers className="size-8 text-zinc-400" />
          </div>
          <div>
            <h3 className="text-zinc-900 font-semibold mb-1">
              No Data Available
            </h3>
            <p className="text-zinc-500 text-sm max-w-sm">
              Connect your data source to start visualizing your metrics or drop
              a widget here.
            </p>
          </div>
          <button className="px-4 py-2 mt-2 bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-700 rounded-lg text-sm font-medium transition-colors shadow-sm">
            Configure View
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;

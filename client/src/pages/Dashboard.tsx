import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import GreetingBanner from "../components/GreetingBanner";
import ProjectActivityChart from "../components/ProjectActivityChart";
import DailyGoal from "../components/DailyGoal";
import RecentProjects from "../components/RecentProjects";
import UpcomingDeadlines from "../components/UpcomingDeadlines";
import CollaboratorCard from "../components/CollaboratorCard";
import ActivityFeed from "../components/ActivityFeed";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Navbar */}
        <Navbar />

        {/* Greeting Banner */}
        <div className="mt-8">
          <GreetingBanner />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          <StatCard
            title="Projects Joined"
            value="12"
            color="bg-indigo-600"
          />

          <StatCard
            title="Projects Created"
            value="4"
            color="bg-emerald-600"
          />

          <StatCard
            title="Connections"
            value="28"
            color="bg-pink-600"
          />

          <StatCard
            title="Skills"
            value="15"
            color="bg-orange-500"
          />
        </div>

        {/* Chart + Daily Goal */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
          <div className="xl:col-span-2">
            <ProjectActivityChart />
          </div>

          <DailyGoal />
        </div>

        {/* Projects + Deadlines */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
          <div className="xl:col-span-2">
            <RecentProjects />
          </div>

          <UpcomingDeadlines />
        </div>

        {/* Collaborators + Activity */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
          <CollaboratorCard />
          <ActivityFeed />
        </div>
      </main>
    </div>
  );
}
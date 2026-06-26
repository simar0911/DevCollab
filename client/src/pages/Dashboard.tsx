import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import RecentProjects from "../components/RecentProjects";
import CollaboratorCard from "../components/CollaboratorCard";
import ActivityFeed from "../components/ActivityFeed";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <main className="flex-1 p-8">
        <Navbar />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
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
        <div className="mt-8">
    <RecentProjects />
</div>
        <div className="mt-8">
    <CollaboratorCard />
</div>
        <div className="mt-8">
    <ActivityFeed />
</div>
      </main>
    </div>
  );
}
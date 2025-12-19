import { PageLayout } from "@/components/layout/PageLayout";
import { SettingsTable } from "@/components/settings/SettingsTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { departments, locations, categories, users } from "@/lib/data";

export default function SettingsPage() {
  const userRoles = [
      { id: '1', name: 'Admin' },
      { id: '2', name: 'Manager' },
      { id: '3', name: 'Technician' },
      { id: '4', name: 'Employee' },
  ];
  return (
    <PageLayout title="Settings">
      <Tabs defaultValue="departments" className="space-y-4">
        <TabsList>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="locations">Locations</TabsTrigger>
          <TabsTrigger value="categories">Asset Categories</TabsTrigger>
          <TabsTrigger value="users">User Roles</TabsTrigger>
        </TabsList>
        <TabsContent value="departments">
            <SettingsTable title="Manage Departments" data={departments} noun="Department" />
        </TabsContent>
        <TabsContent value="locations">
            <SettingsTable title="Manage Locations" data={locations} noun="Location" />
        </TabsContent>
        <TabsContent value="categories">
            <SettingsTable title="Manage Asset Categories" data={categories} noun="Category" />
        </TabsContent>
        <TabsContent value="users">
            <SettingsTable title="Manage User Roles" data={userRoles} noun="Role" />
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
}

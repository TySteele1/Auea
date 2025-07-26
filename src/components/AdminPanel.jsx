import React, { useContext, useState } from 'react';
import { UserContext } from '@/contexts/UserContext';
import StatusDisplay from '@/components/admin/StatusDisplay';
import RBACManager from '@/components/admin/RBACManager';
import ModeSwitcher from '@/components/admin/ModeSwitcher';
import LegalCoreAccess from '@/components/admin/LegalCoreAccess';
import VortexControl from '@/components/admin/VortexControl';
import SentinelMonitor from '@/components/admin/SentinelMonitor';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const AdminPanel = () => {
  const { role, mode } = useContext(UserContext);
  const [viewMode, setViewMode] = useState('tabs'); // or "grid"

  const isAdmin = role === 'admin';
  const isDev = role === 'developer';

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Admin Control Panel</h1>
      <button
        className="bg-slate-200 p-2 rounded text-sm"
        onClick={() =>
          setViewMode((prev) => (prev === 'tabs' ? 'grid' : 'tabs'))
        }
      >
        Toggle View: {viewMode.toUpperCase()}
      </button>

      {viewMode === 'tabs' ? (
        <Tabs defaultValue="status">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="status">Status</TabsTrigger>
            <TabsTrigger value="rbac">RBAC</TabsTrigger>
            <TabsTrigger value="mode">Mode</TabsTrigger>
            <TabsTrigger value="legal">Legal</TabsTrigger>
            <TabsTrigger value="vortex">Vortex</TabsTrigger>
            <TabsTrigger value="sentinel">Sentinel</TabsTrigger>
          </TabsList>

          <TabsContent value="status">
            <StatusDisplay />
          </TabsContent>
          <TabsContent value="rbac">
            <RBACManager />
          </TabsContent>
          <TabsContent value="mode">
            <ModeSwitcher />
          </TabsContent>
          <TabsContent value="legal">
            <LegalCoreAccess />
          </TabsContent>
          <TabsContent value="vortex">
            <VortexControl />
          </TabsContent>
          <TabsContent value="sentinel">
            <SentinelMonitor />
          </TabsContent>
        </Tabs>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <StatusDisplay />
          <RBACManager />
          <ModeSwitcher />
          <LegalCoreAccess />
          <VortexControl />
          <SentinelMonitor />
        </div>
      )}
    </div>
  );
};

export default AdminPanel;

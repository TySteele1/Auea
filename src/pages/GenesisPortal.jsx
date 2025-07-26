// GenesisPortal.jsx
import React, { useContext } from 'react';
import { UserContext } from '@/context/UserContext';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

// Core Modules
import RBAC from '@/modules/RBAC';
import LegalCore from '@/modules/LegalCore';
import Uploader from '@/modules/Uploader';
import UserProgress from '@/modules/UserProgress';

// Dev + Admin Tools
import SandboxTools from '@/modules/SandboxTools';
import Tutorials from '@/modules/Tutorials';
import VortexMode from '@/modules/VortexMode';

// System Health & Sync
import Sentinel from '@/modules/Sentinel';
import Diagnostics from '@/modules/Diagnostics';
import Telemetry from '@/modules/Telemetry';

// Genesis Extensions
import CIFModule from '@/modules/CIFModule';
import GenesisMemory from '@/modules/GenesisMemory';
import CIFTraining from '@/modules/CIFTraining';
import CommandCenter from '@/modules/CommandCenter';
import GenesisTerminal from '@/modules/GenesisTerminal';
import GenesisVision from '@/modules/GenesisVision';

const GenesisPortal = () => {
  const { role, mode } = useContext(UserContext); // { role: 'admin' | 'user', mode: 'dev' | 'prod' }

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold">
        Genesis Portal – Subspace Communications Shell
      </h2>

      <Tabs defaultValue="core" className="w-full">
        <TabsList className="grid grid-cols-4 gap-2">
          <TabsTrigger value="core">Core Systems</TabsTrigger>
          <TabsTrigger value="admin">Admin Tools</TabsTrigger>
          <TabsTrigger value="health">Diagnostics</TabsTrigger>
          <TabsTrigger value="genesis">Genesis Extensions</TabsTrigger>
        </TabsList>

        {/* Core Systems */}
        <TabsContent value="core">
          <Card>
            <CardContent className="p-4 space-y-4">
              <RBAC />
              <LegalCore />
              <Uploader />
              <UserProgress />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Admin/Dev Tools */}
        <TabsContent value="admin">
          {(role === 'admin' || mode === 'dev') && (
            <Card>
              <CardContent className="p-4 space-y-4">
                <SandboxTools />
                <Tutorials />
                <VortexMode />
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Diagnostics & Sentinel Systems */}
        <TabsContent value="health">
          {(role === 'admin' || mode === 'dev') && (
            <Card>
              <CardContent className="p-4 space-y-4">
                <Sentinel />
                <Diagnostics />
                <Telemetry />
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Genesis Extensions – Always Active in Grid Mode */}
        <TabsContent value="genesis">
          <Card>
            <CardContent className="p-4 space-y-4">
              <CIFModule />
              <GenesisMemory />
              <CIFTraining />
              <CommandCenter />
              <GenesisTerminal />
              <GenesisVision />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GenesisPortal;

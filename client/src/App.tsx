import React, { useEffect } from 'react';
import { Route, Switch } from 'wouter';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { initTheme } from '@/utils/theme';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/Layout';
import HomePage from '@/pages/home';
import AircraftFleet from '@/pages/aircraft';
import OurStory from '@/pages/our-story';
import CustomerSupport from '@/pages/customer-support';
import Sustainability from '@/pages/sustainability';
import Contact from '@/pages/contact';
import NotFound from '@/pages/not-found';

const App: React.FC = () => {
  useEffect(() => {
    initTheme();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/aircraft" component={AircraftFleet} />
          <Route path="/our-story" component={OurStory} />
          <Route path="/customer-support" component={CustomerSupport} />
          <Route path="/sustainability" component={Sustainability} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;

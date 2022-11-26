import React from 'react';
import { NewsSection } from '../NewsSection/NewsSection';
import NotesSection from '../NotesSection/NotesSection';

const SideSection = ({ notes }) => {
  return <>{notes ? <NotesSection /> : <NewsSection />}</>;
};

export default SideSection;

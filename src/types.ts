import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  technicalChallenge: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  image: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  category: 'Frontend' | 'Backend' | 'Frameworks' | 'Databases' | 'Other';
}

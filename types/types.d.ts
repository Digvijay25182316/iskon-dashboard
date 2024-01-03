interface volunteer {
  _id: string;
  first_name: string;
  last_name: string;
  initiated_name: string;
  wa_number: string;
  contact_number: string;
  email: string;
  dob: string;
  gender: string;
  address: string;
  service_interested: string;
  current_survice: string;
  created_By: volunteer;
  createdAt: string;
  updatedAt: string;
}

interface CourseTypes {
  _id: string;
  program_name: string;
  course_name: string;
  course_type: [string];
  course_location: string;
  course_description: string;
  course_preacher: volunteer;
  course_mentor1: volunteer;
  course_mentor2: volunteer;
  number_of_levels: number;
  course_Levels: LevelTypes[];
  createdAt: string;
  updatedAt: string;
  created_By: string;
}

interface ParticipantTypes {
  _id: string;
  first_name: string;
  last_name: string;
  wa_number: string;
  contact_number: string;
  email: string;
  dob: Date;
  age: Number;
  gender: string;
  service_interested: string;
  createdAt: string;
  updatedAt: string;
}

interface ProgramTypes {
  _id: string;
  program_name: string;
  program_description: string;
  program_preacher: volunteer;
  program_incharge: volunteer;
  program_mentor: volunteer;
  program_coordinator: volunteer;
  program_audiance: string;
  program_location: string;
  courses: string;
  created_By: volunteer;
  createdAt: string;
  updatedAt: string;
}

interface LevelTypes {
  _id: string;
  level_number: string;
  level_description: string;
  level_preacher1: volunteer;
  level_preacher2: volunteer;
  level_mentor: volunteer;
  level_coordinator: volunteer;
  level_status: "active" | "inactive";
  number_of_attendance: string;
  number_of_sessions: string;
  sessions: string;
  ExpectedStartDate: string;
  actualStartDate: string;
  ExpectedEndDate: string;
  actualEndDate: string;
  created_By: string;
  createdAt: string;
  updatedAt: string;
}

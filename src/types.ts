export type courseSearchResults = {
  success: boolean;
  totalCount: number;
  data: courseInfoResult[] | null;
  pageOffset: number;
  pageMaxSize: number;
  sectionsFetchedCount: 33;
  pathMode: "search" | string | null;
  searchResultsConfigs: unknown;
  ztcEncodedImage: string | null;
};

export type courseInfoResult = {
  id: number;
  term: string;
  termDesc: string;
  courseReferenceNumber: string;
  partOfTerm: string;
  courseNumber: string;
  subject: string;
  subjectDescription: string;
  sequenceNumber: string;
  campusDescription: string;
  scheduleTypeDescription: string;
  courseTitle: string;
  creditHours: number;
  maximumEnrollment: number;
  enrollment: number;
  seatsAvailable: number;
  waitCapacity: number;
  waitCount: number;
  waitAvailable: number;

  crossList: any;
  crossListCapacity: any;
  crossListCount: any;
  crossListAvailable: any;

  creditHourHigh: any;
  creditHourLow: any;
  creditHourIndicator: any;

  openSection: boolean;

  linkIdentifier: any;
  isSectionLinked: boolean;

  subjectCourse: string;

  faculty: facultyResult[];

  meetingFaculty: meetingsFacultyResult[];

  resservedSeatSummary: any;
  sectionAttributes: any;

  instructionalMethod: "OC" | "IP" |"HB" | "OS" | "OA" | string;
  instructionalMethodDescription: "Fully Online synch and async" | "In-person" | "IN-PERSON some wkly online" | "Fully Online synchronous" | "Fully Online asynchronous" | string;
};

export type facultyResult = {
  bannerId: string;
  category: any;
  class: string;
  courseReferenceNumber: string;
  displayName: string;
  emailAddress: string;
  primaryIndicator: boolean;
  term: string;
};

export type meetingsFacultyResult = {
  category: string;
  class: string;
  courseReferenceNumber: string;
  faculty: any[];

  meetingTime: meetingTimeResult[];
  term: string;
};

export type meetingTimeResult = {
  beginTime: string;
  building: string;
  buildingDescription: string;
  campus: string;
  campusDescription: string;
  category: string;
  class: string;
  courseReferenceNumber: string;
  creditHourSession: number;
  endDate: string;
  endTime: string;
  friday: boolean;
  hoursWeek: 4;
  meetingScheduleType: string;
  meetingType: string;
  meetingTypeDescription: string;
  monday: boolean;
  room: string;
  saturday: boolean;
  startDate: string;
  sunday: boolean;
  term: string;
  thursday: boolean;
  tuesday: boolean;
  wednesday: boolean;
};

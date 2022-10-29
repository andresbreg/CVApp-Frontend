export class About {
  location!: String;
  phoneNumber!: String;
  email!: String;
  about!: String;
}

export class Education {
  id!: String;
  logoUrl!: String;
  startDate!: String;
  endDate!: String;
  name!: String;
  course!: String;
}

export class Experience {
  id!: String;
  logoUrl!: String;
  startDate!: String;
  endDate!: String;
  name!: String;
  job!: String;
}

export class Skill {
  id!: String;
  logoUrl!: String;
  name!: String;
  skillLevel!: String;
}

export class Project {
  id!: String;
  logoUrl!: String;
  startDate!: String;
  endDate!: String;
  name!: String;
  description!: String;
  link!: String;
}

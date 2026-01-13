/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: certifications
 * Interface for Certifications
 */
export interface Certifications {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  certificationName?: string;
  /** @wixFieldType text */
  issuingOrganization?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image */
  certificationImage?: string;
  /** @wixFieldType date */
  issueDate?: Date | string;
  /** @wixFieldType url */
  verificationUrl?: string;
}


/**
 * Collection ID: clientlogos
 * Interface for ClientLogos
 */
export interface ClientLogos {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  clientName?: string;
  /** @wixFieldType image */
  logo?: string;
  /** @wixFieldType url */
  websiteUrl?: string;
  /** @wixFieldType text */
  altText?: string;
  /** @wixFieldType number */
  displayOrder?: number;
}


/**
 * Collection ID: itservices
 * Interface for ITServices
 */
export interface ITServices {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  serviceName?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  detailedDescription?: string;
  /** @wixFieldType image */
  serviceIcon?: string;
  /** @wixFieldType text */
  slug?: string;
  /** @wixFieldType text */
  keyBenefits?: string;
}


/**
 * Collection ID: leadershipteam
 * Interface for LeadershipTeam
 */
export interface LeadershipTeam {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  fullName?: string;
  /** @wixFieldType text */
  role?: string;
  /** @wixFieldType image */
  photo?: string;
  /** @wixFieldType text */
  bio?: string;
  /** @wixFieldType url */
  linkedinProfile?: string;
  /** @wixFieldType number */
  displayOrder?: number;
}


/**
 * Collection ID: openroles
 * Interface for OpenRoles
 */
export interface OpenRoles {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  jobTitle?: string;
  /** @wixFieldType text */
  jobDescription?: string;
  /** @wixFieldType text */
  requirements?: string;
  /** @wixFieldType text */
  location?: string;
  /** @wixFieldType text */
  employmentType?: string;
  /** @wixFieldType text */
  department?: string;
  /** @wixFieldType url */
  applicationUrl?: string;
}


/**
 * Collection ID: testimonials
 * Interface for Testimonials
 */
export interface Testimonials {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  clientName?: string;
  /** @wixFieldType text */
  testimonialText?: string;
  /** @wixFieldType text */
  clientTitle?: string;
  /** @wixFieldType text */
  clientCompany?: string;
  /** @wixFieldType image */
  clientPhoto?: string;
  /** @wixFieldType number */
  rating?: number;
  /** @wixFieldType date */
  testimonialDate?: Date | string;
}

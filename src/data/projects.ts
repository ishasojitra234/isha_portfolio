export type ProjectModule = {
  name: string;
  technicalName?: string;
  summary: string;
  capabilities: string[];
};

export type Project = {
  slug: string;
  title: string;
  role: string;
  category: string;
  detailCategory?: string;
  group: "industry" | "operations" | "integrations";
  version: string;
  edition: string;
  technologies: string[];
  description: string;
  features: [string, string, string];
  visual: string;
  artTitle: string;
  artLabel: string;
  context: string;
  approach: string;
  contributions: string[];
  outcome: string;
  modules?: ProjectModule[];
  sourceNotes?: string[];
};

export const projects: Project[] = [
  {
    slug: "oil-distribution-erp",
    title: "Oil distribution ERP",
    role: "Odoo Developer – Customization & Enhancement",
    category: "Industry ERP",
    group: "industry",
    version: "Odoo 17",
    edition: "Not specified",
    technologies: ["Python", "XML / QWeb", "PostgreSQL"],
    description:
      "Customized oil-distribution workflows across CRM, sales, and accounting, including tailored invoice reports and sales-order handling.",
    features: ["CRM & sales", "Invoice reports", "Order sequences"],
    visual: "oil",
    artTitle: "Sales & accounts",
    artLabel: "DISTRIBUTION WORKFLOW",
    context:
      "The project brings customer relationships, sales orders, and accounting documents together for an oil distribution business.",
    approach:
      "Customizations focus on the handoff from CRM to sales and invoicing, with tailored invoice output and order-sequence handling.",
    contributions: [
      "Customized the handoff from CRM opportunities into sales orders.",
      "Handled sales-order sequence requirements for the distribution workflow.",
      "Tailored invoice reports for the business's accounting process.",
    ],
    outcome:
      "Customer, sales, and invoice workflows are better aligned for the oil distribution business.",
  },
  {
    slug: "sms-integration-suite",
    title: "SMS integration suite",
    role: "Odoo SMS integration development",
    category: "Integrations",
    group: "integrations",
    version: "Odoo 17",
    edition: "Not specified",
    technologies: ["Python", "XML", "SMS provider API", "Webhooks"],
    description:
      "Connected SMS messaging to everyday Odoo work across sales, invoices, CRM, HR, POS, purchasing, and delivery flows.",
    features: ["Sales & invoices", "POS & CRM", "HR & inventory"],
    visual: "sms",
    artTitle: "Messages, in context",
    artLabel: "CROSS-APP MESSAGING",
    context:
      "Teams needed messaging to be available across multiple Odoo apps instead of being isolated in a single workflow.",
    approach:
      "The integration suite connects SMS capabilities to sales, invoicing, CRM, HR, POS, purchasing, and delivery operations.",
    contributions: [
      "Connected provider settings, reusable templates, and contacts to Odoo messaging.",
      "Added message workflows around sales, invoices, and CRM activities.",
      "Extended messaging into HR, POS, purchasing, and delivery operations.",
    ],
    outcome:
      "A shared SMS capability is available across more of the team's everyday Odoo workflows.",
    modules: [
      {
        name: "SMS provider, templates & contacts",
        technicalName: "lax_infinity_sms · lax_sms_base",
        summary:
          "The core add-ons manage provider setup and reusable messaging assets that other Odoo workflows can call.",
        capabilities: [
          "Configure sender IDs, provider details, and message templates",
          "Render template variables and preview messages before sending",
          "Manage contact groups, contacts, drafts, credit history, and webhooks",
          "Use send and contact-management wizards for day-to-day operations",
        ],
      },
      {
        name: "Accounting & invoice notifications",
        technicalName: "lax_sms_account · lax_account_invoice_sms",
        summary:
          "Accounting extensions surface SMS actions around invoices and payments and can send configured messages after posting events.",
        capabilities: [
          "Trigger template-based messages from invoice or payment posting",
          "Resolve partner template variables, including balance-due information",
          "Provide message actions alongside accounting records",
        ],
      },
      {
        name: "Sales & CRM messaging",
        technicalName: "lax_sms_sale · lax_sms_crm",
        summary:
          "Sales and lead workflows expose SMS actions from the records where customer communication is managed.",
        capabilities: [
          "Send configured messages from sales orders",
          "Connect SMS actions to CRM lead workflows",
          "Reuse central templates and contact data",
        ],
      },
      {
        name: "HR, POS, purchasing & delivery",
        technicalName: "lax_sms_hr · lax_sms_pos · lax_sms_purchase · lax_sms_stock",
        summary:
          "Additional add-ons extend the same messaging capability into employee, point-of-sale, purchasing, and stock operations.",
        capabilities: [
          "Expose SMS entry points on employee and HR records",
          "Connect messaging to POS orders and purchase orders",
          "Support messages from stock pickings and delivery workflows",
          "Include payslip and report hooks where provided by the HR add-on",
        ],
      },
    ],
    sourceNotes: [
      "This is a collection of separately packaged add-ons. The core connector has no manifest author listed, and the invoice add-on identifies itself as “Your Company”; this page describes the supplied code without claiming sole authorship of every package.",
    ],
  },
  {
    slug: "gst-return-preparation",
    title: "GST return preparation",
    role: "GST reporting workflow development",
    category: "Finance & reporting",
    group: "operations",
    version: "Odoo 17",
    edition: "Not specified",
    technologies: ["Python", "XML / QWeb", "GST API", "JSON", "Excel"],
    description:
      "Built a monthly and quarterly GST return workflow, organizing invoice data into GSTR-1 sections with downloadable JSON and Excel reports.",
    features: ["GSTR-1 sections", "JSON & Excel", "Return periods"],
    visual: "gst",
    artTitle: "Return reporting",
    artLabel: "INDIA GST WORKFLOW",
    context:
      "Preparing a return involves organizing invoice information by reporting period and the relevant GSTR-1 sections.",
    approach:
      "The workflow supports monthly and quarterly periods and produces downloadable JSON and Excel outputs from the organized return data.",
    contributions: [
      "Organized accounting data into GSTR-1 reporting sections by return period.",
      "Supported monthly and quarterly return preparation.",
      "Added downloadable JSON and Excel outputs, along with selected API and filing-status interactions.",
    ],
    outcome:
      "Return data can be prepared in a structured GSTR-1 workflow and exported for further use.",
    modules: [
      {
        name: "GST return periods & GSTR-1",
        technicalName: "lax_gst_return_period",
        summary:
          "Accounting documents are organized into a dated return period and separated into GSTR-1 reporting sections.",
        capabilities: [
          "Create monthly or quarterly periods with derived start and end dates",
          "Prepare B2B/B2BA, B2CS/B2CL, credit/debit note, export, advance, adjustment, exempt-supply, HSN, and document-count sections",
          "Compute return data from posted accounting documents",
          "Download JSON and Excel return outputs",
        ],
      },
      {
        name: "GST API & filing-status support",
        technicalName: "res.company settings · submit_otp wizard",
        summary:
          "Company settings and OTP flows support authentication and selected interactions with GST services.",
        capabilities: [
          "Configure company GST API access and authenticate with an OTP wizard",
          "Request return summaries and surface API errors",
          "Update e-verification and filing-status information",
        ],
      },
    ],
    sourceNotes: [
      "Although the manifest mentions GSTR-2B and GSTR-3B, the reviewed screens and implementation are centered on GSTR-1; no comparable 2B-matching or 3B workflow was found.",
      "The code supports API and filing-status interactions; this description does not imply a verified end-to-end filing submission.",
    ],
  },
  {
    slug: "clinical-encounters-prescriptions",
    title: "Clinical encounters & prescriptions",
    role: "Clinical workflow development",
    category: "Healthcare",
    group: "industry",
    version: "Odoo 17",
    edition: "Not specified",
    technologies: ["Python", "XML / QWeb", "PostgreSQL"],
    description:
      "Developed hospital workflows for patients, doctors, appointments, OPD visits, follow-ups, diagnoses, medicines, and prescriptions.",
    features: ["Patient visits", "Appointments", "Prescriptions"],
    visual: "clinical",
    artTitle: "Patient care",
    artLabel: "CLINICAL WORKFLOW",
    context:
      "Clinical teams need patient appointments and encounter records to connect with follow-up care and the treatment information recorded during a visit.",
    approach:
      "The work links patient and doctor records with OPD visits, follow-ups, diagnoses, medicines, and prescriptions.",
    contributions: [
      "Connected patient and doctor records with appointment scheduling.",
      "Added OPD visit notes and follow-up records to the patient workflow.",
      "Linked diagnoses, medicines, and prescriptions with encounter information.",
    ],
    outcome:
      "Appointments, follow-ups, and prescription details are brought together in a patient-care workflow.",
    modules: [
      {
        name: "Patient records & appointment scheduling",
        technicalName: "lax_hms · patient.py · appointment.py",
        summary:
          "Patient records and appointment workflows track visits and their status while preventing common scheduling conflicts.",
        capabilities: [
          "Maintain patient demographic and contact details",
          "Create sequenced appointments with tracked states",
          "Prevent duplicate appointments for the same patient and date",
          "Check for doctor double-booking conflicts",
          "Show appointment and follow-up counts and recent history on patient views",
        ],
      },
      {
        name: "OPD, follow-ups & prescription entry",
        technicalName: "followup.py · prescription_wizard.py",
        summary:
          "Visit notes and follow-up actions capture the next stage of a patient encounter.",
        capabilities: [
          "Record OPD notes and follow-up visits",
          "Use the prescription wizard to create a follow-up record",
          "Track follow-up state and link it back to patient history",
        ],
      },
    ],
    sourceNotes: [
      "Several separate doctor, disease, drug, occupation, and OPD model files are not imported by the module initializer. The reviewed source also has a drug-model relation-name mismatch and an appointment completion method referencing an undeclared field; validate these paths before claiming they work in an installed database.",
    ],
  },
  {
    slug: "openeducat-enhancements",
    title: "OpenEduCat enhancements",
    role: "Odoo Developer – Customization & Enhancement",
    category: "Education",
    detailCategory: "Education ERP · Odoo Customization",
    group: "industry",
    version: "Odoo 16 & 17",
    edition: "Community Edition",
    technologies: ["Python", "Odoo ORM", "XML", "PostgreSQL", "QWeb"],
    description:
      "Customized and enhanced the OpenEduCat education management system to support student admissions, academic operations, fee management, examinations, marksheets, and alumni workflows.",
    features: ["Admissions & fees", "Exams & marksheets", "Alumni"],
    visual: "education",
    artTitle: "Student journey",
    artLabel: "EDUCATION ERP",
    context:
      "Education management required flexible workflows for handling student records, admission processes, fee structures, examination activities, and academic documentation.",
    approach:
      "Customized OpenEduCat modules to support student admissions, academic operations, fee management, examinations, marksheets, and alumni workflows.",
    contributions: [
      "Customized existing OpenEduCat modules based on business requirements.",
      "Enhanced student admission and onboarding workflows.",
      "Customized fee structures, payment management, and student documents.",
      "Extended examination configuration and marksheet functionality.",
      "Implemented alumni and leaving certificate customizations.",
      "Enhanced payment registers with banking and cheque-related information.",
    ],
    outcome:
      "Delivered customized education workflows with improved student record management, fee processing, examination handling, and academic documentation.",
    modules: [
      {
        name: "Education core & student lifecycle",
        technicalName: "openeducat_core · openeducat_core_enterprise · openeducat_erp · openeducat_admission · openeducat_admission_enterprise · openeducat_dynamic_admission · openeducat_onboarding · openeducat_activity · openeducat_core_send_mail",
        summary:
          "Core and enterprise add-ons provide student, admission, and education-ERP workflows.",
        capabilities: [
          "Maintain core student and academic records",
          "Support admission, dynamic admission, onboarding, and related activities",
          "Include ERP and education-specific mail integrations",
        ],
      },
      {
        name: "Classroom, assignments & learning",
        technicalName: "openeducat_lesson · openeducat_classroom · openeducat_classroom_enterprise · openeducat_facility · openeducat_parent · openeducat_assignment · openeducat_assignment_enterprise · openeducat_assignment_grading_bridge · openeducat_assignment_grading_enterprise",
        summary:
          "Learning and classroom packages connect lessons, facilities, parents, and assignment submission/grading.",
        capabilities: [
          "Manage lessons, classrooms, and facility-related records",
          "Provide parent-facing education extensions",
          "Handle assignments and assignment-grading integrations",
        ],
      },
      {
        name: "Attendance, grading & timetables",
        technicalName: "openeducat_grading · openeducat_attendance · openeducat_attendance_enterprise · openeducat_attendance_report_xlsx · openeducat_student_leave_enterprise · openeducat_student_progress_enterprise · openeducat_timetable · openeducat_timetable_enterprise",
        summary:
          "Operational modules extend attendance, student progress, grading, leave, reporting, and schedules.",
        capabilities: [
          "Track attendance and student leave/progress",
          "Provide grading and attendance report extensions",
          "Manage timetables and enterprise scheduling workflows",
        ],
      },
      {
        name: "Library, exams & fees",
        technicalName: "openeducat_library · openeducat_exam · openeducat_exam_enterprise · openeducat_fees · openeducat_fees_plan · openeducat_fees_on_duration · openeducat_fees_on_session",
        summary:
          "The package includes the library, examination, and education fee modules.",
        capabilities: [
          "Organize library records",
          "Configure exams and enterprise exam workflows",
          "Manage fees through fee plans, duration, and session-based variants",
        ],
      },
      {
        name: "Web experience & document utilities",
        technicalName: "openeducat_web · web_openeducat · muk_web_theme · muk_web_colors · muk_web_dialog · muk_web_chatter · muk_web_appsbar · backend_theme · pdf_print_preview · ps_binary_field_attachment_preview · contry_id",
        summary:
          "The broader workspace also bundles web themes, interface components, and document-preview utilities.",
        capabilities: [
          "Include education web and portal extensions",
          "Bundle backend themes and MuK interface components",
          "Provide PDF and binary attachment preview helpers",
        ],
      },
      {
        name: "Exam configuration & marksheets",
        technicalName: "lax_exam_configuration",
        summary:
          "Adds Laxicon exam and marksheet configuration on top of the bundled education suite.",
        capabilities: [
          "Configure exam and marks-related records",
          "Extend marksheet reporting with computed totals",
        ],
      },
      {
        name: "Admissions & academic-year fields",
        technicalName: "lax_openeducat_admission",
        summary:
          "Extends admission and inquiry records with additional academic context.",
        capabilities: [
          "Add admission/inquiry workflow fields",
          "Connect records to academic-year information",
        ],
      },
      {
        name: "Fee structures & student documents",
        technicalName: "lax_fees_structure",
        summary:
          "Adds fee-structure, payment, document, certificate, and report customizations to education records.",
        capabilities: [
          "Extend student fee structures and payment details",
          "Support student document and certificate records",
          "Provide related education report customizations",
        ],
      },
      {
        name: "Alumni & leaving certificates",
        technicalName: "lax_openeducat_alumni",
        summary:
          "Extends alumni records and the student exit-document workflow.",
        capabilities: [
          "Maintain alumni-related records",
          "Add leaving-certificate logic and related information",
        ],
      },
      {
        name: "Payment register extensions",
        technicalName: "laxicon_payment_extend",
        summary:
          "Adds payment-register fields for banking and cheque information.",
        capabilities: [
          "Store bank and payee details on payment records",
          "Record cheque-related information through the included wizard",
        ],
      },
    ],
    sourceNotes: [
      "This workspace contains 49 manifests from multiple vendors. The education platform includes OpenEduCat Inc modules, while MuK and other vendors supply additional components; the Laxicon-specific extensions are identified separately above.",
    ],
  },
  {
    slug: "rental-multi-instance-configuration",
    title: "Rental & multi-instance configuration",
    role: "Odoo instance configuration",
    category: "ERP workflows",
    group: "operations",
    version: "Odoo",
    edition: "Not specified",
    technologies: ["Python", "XML", "PostgreSQL"],
    description:
      "Built configuration tools to connect Odoo instances, synchronize sequences and scheduled jobs, and manage WhatsApp settings.",
    features: ["Instance setup", "Sequence sync", "Scheduled jobs"],
    visual: "rental",
    artTitle: "Connected instances",
    artLabel: "REMOTE CONFIGURATION",
    context:
      "This configuration work supports coordinating selected settings and scheduled operations between connected Odoo instances.",
    approach:
      "The tools cover instance setup, sequence and scheduled-job synchronization, and WhatsApp configuration. The project is about instance configuration, not rental pricing workflows.",
    contributions: [
      "Configured connection details for a remote Odoo instance.",
      "Added sequence synchronization and updates for prefixes and next numbers.",
      "Supported scheduled-job synchronization and WhatsApp server settings.",
    ],
    outcome:
      "Administrators can coordinate selected configuration and scheduled operations between Odoo instances; this is not a rental-order workflow.",
    modules: [
      {
        name: "Remote Odoo instance configuration",
        technicalName: "lax_rental_config",
        summary:
          "Despite the repository name, the module configures a remote Odoo connection and selected synchronization operations.",
        capabilities: [
          "Store the remote URL, database connection settings, and token configuration",
          "Enable or disable the related WhatsApp-server setting",
          "Synchronize sequences in either direction and push prefix/next-number updates",
          "Synchronize scheduled jobs and manually trigger a remote cron",
          "Refresh connection tokens from a daily scheduled job",
        ],
      },
    ],
    sourceNotes: [
      "The reviewed source implements remote-instance configuration and synchronization, not rental products, rental pricing, or rental-order management.",
    ],
  },
  {
    slug: "community-sabha-management",
    title: "Community & Sabha management",
    role: "Community workflow development",
    category: "Community",
    group: "industry",
    version: "Odoo 17",
    edition: "Not specified",
    technologies: ["Python", "XML", "OWL"],
    description:
      "Created community meeting records with regional zones, location details, participant lists, and invited-versus-present attendance counts.",
    features: ["Meetings & zones", "Participant lists", "Attendance"],
    visual: "community",
    artTitle: "People & gatherings",
    artLabel: "COMMUNITY WORKFLOW",
    context:
      "Community organizers need to record gatherings alongside where they take place, who is invited, and who attends.",
    approach:
      "The module organizes meetings, zones and locations, participant lists, and attendance counts for invited and present members.",
    contributions: [
      "Recorded Sabha meetings with dates, speakers, zones, and location details.",
      "Managed participant lists and invited-versus-present attendance counts.",
      "Extended partner records with Sabha and location-related information.",
    ],
    outcome:
      "Meeting, location, participant, and attendance information is organized in one community workflow.",
    modules: [
      {
        name: "Sabha & attendee management",
        technicalName: "satdham_sabha",
        summary:
          "Sabha records combine event details with a location hierarchy and a participant attendance list.",
        capabilities: [
          "Record meeting date, speaker, location hierarchy, and zone",
          "Load participant lists and mark attendance",
          "Show invited and present attendee totals",
          "Extend partner records with Sabha role, local/native locations, unique code, and attendance progress",
          "Cascade area, village, and taluka location information",
        ],
      },
      {
        name: "Search within attendee lists",
        technicalName: "one2many_search_widget",
        summary:
          "A companion OWL field widget adds search within one-to-many lists used in the workflow.",
        capabilities: [
          "Search list entries without leaving the parent record",
          "Use the widget in one-to-many fields where configured",
        ],
      },
    ],
    sourceNotes: [
      "The Sabha module identifies Laxicon Solution as its author. The companion one-to-many search widget identifies Cybrosys Techno Solutions and is not presented as original Sabha functionality.",
    ],
  },
  {
    slug: "crm-helpdesk-warranty-workflows",
    title: "CRM, helpdesk & warranty workflows",
    role: "CRM and service workflow customization",
    category: "ERP workflows",
    group: "operations",
    version: "Odoo 18",
    edition: "Not specified",
    technologies: ["Python", "XML / QWeb", "PostgreSQL"],
    description:
      "Customized CRM quotation and feasibility flows alongside helpdesk ticket handling, warranty claims, and inter-company stock transfers.",
    features: ["CRM quotations", "Support & warranty", "Stock transfers"],
    visual: "service",
    artTitle: "From quote to support",
    artLabel: "SERVICE OPERATIONS",
    context:
      "The work spans the customer journey from quotation and feasibility through support, warranty handling, and related stock movement.",
    approach:
      "Custom modules connect CRM quotation flows with helpdesk tickets, AMC and vendor warranty claims, and inter-company stock transfers.",
    contributions: [
      "Customized CRM quotation and feasibility steps.",
      "Worked with customer and vendor warranty-claim workflows.",
      "Covered helpdesk and inter-company stock-transfer workflows included in the wider delivery bundle.",
    ],
    outcome:
      "The documented scope connects quotation, support, warranty, and stock movement, with authorship varying across bundled components.",
    modules: [
      {
        name: "Customer AMC warranty claims",
        technicalName: "lax_amc_warranty_claim",
        summary:
          "Customer warranty records are tied to the related sales order and move through an explicit claim lifecycle.",
        capabilities: [
          "Create and confirm AMC warranty records linked to sales",
          "Open a warranty claim and track processing and completion",
          "Cancel a claim when the request should not continue",
        ],
      },
      {
        name: "Vendor warranty claims",
        technicalName: "lax_vendor_warranty_claim",
        summary:
          "Vendor warranty records connect purchase-side coverage with incoming stock and claim processing.",
        capabilities: [
          "Relate warranty details to purchase orders and stock receipts",
          "Track confirmation, claim, processing, completion, and cancellation",
          "Keep vendor-side claim status visible to operations",
        ],
      },
      {
        name: "CRM quotations & feasibility",
        technicalName: "crm_quotation",
        summary:
          "A quotation workflow adds a review/confirmation step before creating a sale order.",
        capabilities: [
          "Track quotation feasibility and its approval/confirmation state",
          "Create a sale order from the confirmed quotation",
          "Use ticket, device, and material wizards for BTS/project equipment handling",
          "Distinguish customer, vendor, and BTS partner records",
        ],
      },
      {
        name: "Picking references & bundled service operations",
        technicalName: "proline_custom · support_helpdesk_ticket · dev_all_in_one_helpdesk · stock_intercompany_transfer",
        summary:
          "The workspace includes stock-picking reference fields and separately packaged helpdesk/inter-company utilities.",
        capabilities: [
          "Add vendor-bill reference and date information to stock pickings",
          "Include helpdesk ticket handling and status-history support from bundled packages",
          "Include inter-company stock-transfer functionality from a separately attributed add-on",
        ],
      },
      {
        name: "Bundled UI & access utilities",
        technicalName: "muk_web_* · syn_disable_quick_create · login_as_any_user · cup_is_customer_is_vendor · access_roles · auto_save_restrict",
        summary:
          "Additional UI, partner, and access-management modules are present in the workspace.",
        capabilities: [
          "Bundle backend theme, color, dialog, and chatter enhancements",
          "Include quick-create, user-switching, role/access, and autosave restriction utilities",
          "Extend partner customer/vendor classification",
        ],
      },
    ],
    sourceNotes: [
      "This is a mixed bundle. The warranty modules identify Laxicon; CRM quotation and Proline stock-picking changes have no named author in their manifests, while helpdesk, UI, access, and inter-company utilities are separately attributed third-party modules. The page separates these rather than claiming the entire bundle as original code.",
    ],
  },
  {
    slug: "dental-clinic-management",
    title: "Dental clinic management",
    role: "Dental clinic workflow contribution",
    category: "Healthcare",
    group: "industry",
    version: "Odoo 18",
    edition: "Not specified",
    technologies: ["Python", "XML / QWeb", "Website portal"],
    description:
      "Worked on clinic workflows for appointments, doctors, treatments, prescriptions, patient questionnaires, and insurance details.",
    features: ["Appointments", "Treatment plans", "Patient records"],
    visual: "dental",
    artTitle: "Clinic schedule",
    artLabel: "DENTAL CARE",
    context:
      "Clinic records need to bring appointments and practitioner details together with treatment and patient information.",
    approach:
      "The work covers appointment and doctor records, treatments and prescriptions, patient questionnaires, and insurance details.",
    contributions: [
      "Worked across doctor schedules and patient appointment workflows.",
      "Connected treatment and prescription records with invoicing.",
      "Included patient questionnaires, insurance details, and related clinical reports.",
    ],
    outcome:
      "Appointments, practitioner information, and care records are brought together in a clinic workflow.",
    modules: [
      {
        name: "Dental appointments & practitioner schedules",
        technicalName: "dental_clinical_management · dental_appointment.py · dental_doctor.py",
        summary:
          "The clinic module organizes doctors and shifts alongside patient appointment requests and records.",
        capabilities: [
          "Maintain doctor/specialist records and shift information",
          "Record patient appointments and website appointment requests",
          "Provide website routes to look up doctors and shifts",
        ],
      },
      {
        name: "Treatments, prescriptions & billing",
        technicalName: "dental_treatment.py · dental_prescription.py",
        summary:
          "Treatment and prescription records connect clinical details with invoice creation.",
        capabilities: [
          "Maintain treatment information and prescription lines",
          "Create an invoice from a prescription",
          "Expose prescription details in the patient portal",
        ],
      },
      {
        name: "Questionnaires & X-ray reports",
        technicalName: "medical_questionnaire.py · xray_report.py",
        summary:
          "Patient questions and a report wizard support additional clinical documentation.",
        capabilities: [
          "Capture medical-questionnaire responses",
          "Generate an X-ray report through a wizard",
          "Show prescription information through patient-portal routes",
        ],
      },
    ],
    sourceNotes: [
      "The supplied manifest identifies Cybrosys Techno Solutions and AGPL-3. This case study describes project work with the included module; it does not claim original authorship of that third-party package.",
    ],
  },
  {
    slug: "hr-payroll-compliance",
    title: "HR, payroll & compliance",
    role: "HR and payroll workflow contribution",
    category: "ERP workflows",
    group: "operations",
    version: "Odoo 18",
    edition: "Not specified",
    technologies: ["Python", "XML / QWeb", "PostgreSQL"],
    description:
      "Extended attendance and payroll flows with overtime/weekend handling, monthly absent-leave automation, India e-waybill extensions, and operational payroll reports.",
    features: ["Attendance & payroll", "E-waybill", "Payroll reports"],
    visual: "payroll",
    artTitle: "People operations",
    artLabel: "HR & COMPLIANCE",
    context:
      "HR and payroll operations involve employee attendance and reporting, along with related compliance and document tracking.",
    approach:
      "The customizations extend attendance, automate absent-leave entries, add India e-waybill and invoice fields, and support payroll reporting.",
    contributions: [
      "Extended attendance handling for overtime and weekend cases.",
      "Automated monthly absent-leave entries and supported payroll reports.",
      "Added India e-waybill and related invoice and partner fields.",
    ],
    outcome:
      "Attendance, payroll reporting, and India-specific e-waybill information are covered by connected Odoo workflows.",
    modules: [
      {
        name: "Attendance, overtime & leave automation",
        technicalName: "pixel_custom_changes · hr_attendance.py · hr_employee.py",
        summary:
          "Attendance extensions distinguish overtime/weekend handling and automate a monthly absent-leave operation.",
        capabilities: [
          "Handle overtime and weekend attendance cases",
          "Create absent-leave records through a scheduled monthly job",
          "Extend employee attendance-related information",
        ],
      },
      {
        name: "Payroll report workbench",
        technicalName: "pixel_custom_changes/wizard/",
        summary:
          "Report wizards prepare common payroll and employee sheets for operational use.",
        capabilities: [
          "Generate salary and payroll master sheets",
          "Prepare bonus and leave reports",
          "Prepare bank-sheet output",
        ],
      },
      {
        name: "India e-waybill & accounting fields",
        technicalName: "l10n_in_ewaybill.py · account_move.py · res_partner.py",
        summary:
          "Localization and accounting extensions add transport and partner details used by the related reports.",
        capabilities: [
          "Add transporter-reason details and invoice links/dates to e-waybill records",
          "Include an e-waybill report extension",
          "Add a vehicle reference on invoices",
          "Add vendor-code and secondary-email fields on partners",
        ],
      },
    ],
    sourceNotes: [
      "The module manifest identifies Pixelwave Infotech as the author.",
    ],
  },
  {
    slug: "challan-print-tracking",
    title: "challan & print tracking",
    role: "Odoo development",
    category: "Manufacturing",
    group: "industry",
    version: "Odoo 19",
    edition: "Not specified",
    technologies: ["Python", "XML / QWeb", "PostgreSQL"],
    description:
      "Developed challan workflows to assign jobs to machines and people, track UV and thermal print stages, record quantities, and link finished work to invoicing.",
    features: ["Job assignment", "Machine tracking", "Invoice linkage"],
    visual: "challan",
    artTitle: "Print production",
    artLabel: "JOB & MACHINE TRACKING",
    context:
      "Print production needs a way to follow work assignments, machine stages, and quantities through to completed jobs.",
    approach:
      "The challan flow tracks assignments to people and machines, UV and thermal printing stages, quantities, and links to invoicing.",
    contributions: [
      "Tracked challan progress from confirmation through assignment, processing, and completion.",
      "Recorded job assignments, machines, print stages, and production quantities.",
      "Linked completed challan work with invoicing.",
    ],
    outcome:
      "Production assignments, print stages, quantities, and invoicing are visible in a connected challan workflow.",
    modules: [
      {
        name: "Production challan lifecycle",
        technicalName: "laxicon_challan",
        summary:
          "Challan orders and lines track work from draft and confirmation through assignment, processing, print completion, and closure.",
        capabilities: [
          "Track draft, confirmed, assigned, processing, print-complete, done, and cancelled states",
          "Assign or unassign production lines and machines",
          "Calculate line rates and record quantities",
          "Maintain UV and thermal print-process records",
          "Create and open related invoices from the challan workflow",
        ],
      },
      {
        name: "Branch, sales & product setup",
        technicalName: "branch_custom · custom_sale · product_variant",
        summary:
          "Companion Laxicon modules extend branch and sales setup and provide product-variant/pricing structures used by operations.",
        capabilities: [
          "Add branch-specific records to the workspace",
          "Extend sales workflows alongside challan operations",
          "Maintain product variants and related pricing structures",
        ],
      },
      {
        name: "Supplier invoice import",
        technicalName: "sh_import_inv",
        summary:
          "An invoice-import add-on is included with the Laxicon modules in this workspace.",
        capabilities: [
          "Import invoice records through the supplied import workflow",
          "Use imported invoices with the related accounting operations",
        ],
      },
      {
        name: "Bundled accounting, access & interface tools",
        technicalName: "account_line_view · advanced_web_domain_widget · query_deluxe · hide_menu_user · cup_is_customer_is_vendor · record_save_notification · simplify_access_management · sequence_reset_period",
        summary:
          "The workspace also contains separately attributed interface, domain, query, access, notification, and sequence utilities.",
        capabilities: [
          "Enhance accounting line views and web-domain/query interactions",
          "Bundle menu-visibility, access-management, and save-notification helpers",
          "Include a sequence reset-by-period utility",
        ],
      },
    ],
    sourceNotes: [
      "The core challan and five companion modules identify Laxicon Solution. Other utilities in this workspace have separate third-party authors; they are listed as bundled functionality, not as custom challan work.",
    ],
  },
  {
    slug: "employee-self-service-finance",
    title: "Employee self-service & finance",
    role: "Employee portal and finance workflow contribution",
    category: "ERP workflows",
    group: "operations",
    version: "Odoo 19",
    edition: "Not specified",
    technologies: ["Python", "XML / QWeb", "PostgreSQL"],
    description:
      "Built employee portal flows for attendance, expenses, and salary advances, alongside daily cashbook and business reporting customizations.",
    features: ["Employee portal", "Salary advances", "Daily cashbook"],
    visual: "employee",
    artTitle: "Employee services",
    artLabel: "PORTAL & FINANCE",
    context:
      "Employees need straightforward access to common HR requests, while finance teams need visibility into daily cash activity.",
    approach:
      "Portal flows cover attendance, expenses, and salary advances, complemented by daily cashbook and business-report customizations.",
    contributions: [
      "Added portal access for attendance activity and employee expense requests.",
      "Supported salary-advance requests and their payroll-related handling.",
      "Worked across daily cashbook and business reporting workflows.",
    ],
    outcome:
      "Employee self-service and finance operations are covered together, with contributions and authorship varying across the supplied packages.",
    modules: [
      {
        name: "Employee attendance & expense portal",
        technicalName: "dh_link_portal_employee · dh_attendance_portal · dh_expense_portal",
        summary:
          "Portal users are linked to employee records and can handle common attendance and expense tasks online.",
        capabilities: [
          "Link employee records to portal users",
          "Review attendance history and check in or out through the portal",
          "Create, edit, and submit expense requests from the portal",
        ],
      },
      {
        name: "Salary advances & payroll deduction",
        technicalName: "salary_advance",
        summary:
          "Employee advance requests pass through manager/finance review and are reconciled through payroll.",
        capabilities: [
          "Submit an employee advance request and route it for approval",
          "Configure advance limits and timing on payroll structures",
          "Register the accounting payment after approval",
          "Mark an advance as deducted when the related payslip is completed",
        ],
      },
      {
        name: "Daily cashbook",
        technicalName: "pixel_daily_casebook",
        summary:
          "A date-range casebook consolidates daily opening balances and cash/bank movements.",
        capabilities: [
          "Summarize opening balances, receipts, expenses, vendor bills, contra entries, and salary advances",
          "Separate cash and bank movements in the report",
          "Review activity for a selected date range",
        ],
      },
      {
        name: "Commodity-specific sales & purchasing",
        technicalName: "pixel_custom",
        summary:
          "Cotton-related transactions receive commodity selection and dedicated document sequences.",
        capabilities: [
          "Select commodities including cotton bales, seed, and raw cotton",
          "Use separate sequences for sales, purchases, invoices, and vendor bills",
        ],
      },
      {
        name: "Cotton procurement, warehouse & production",
        technicalName: "pixel_custom_report",
        summary:
          "A larger reporting/operations suite covers procurement, weighing, quality, stock movement, and production.",
        capabilities: [
          "Support raw-cotton and trading purchases and a Sauda book",
          "Record weigh-bridge and quality information",
          "Handle stock/inventory, bale and seed loading, and transport records",
          "Provide production sheets and related forms/reports",
        ],
      },
      {
        name: "Bundled mail & database utilities",
        technicalName: "auto_database_backup · mail_multicompany",
        summary:
          "The workspace also includes separately attributed database-backup and multi-company mail extensions.",
        capabilities: [
          "Include an automated database-backup add-on",
          "Include multi-company email behavior from a bundled community module",
        ],
      },
    ],
    sourceNotes: [
      "Module authorship varies: salary_advance identifies Isha Sojitra, portal modules identify Datahat Solutions, and the daily casebook identifies Pixelwave. The pixel_custom and pixel_custom_report manifests have no author listed; the backup and multi-company mail packages are third-party.",
    ],
  },
  {
    slug: "odoo-mcp-server",
    title: "Odoo MCP server",
    role: "Odoo MCP integration contribution",
    category: "AI & integrations",
    group: "integrations",
    version: "Odoo 19",
    edition: "Not specified",
    technologies: ["Python", "Model Context Protocol", "OAuth", "API keys"],
    description:
      "Worked on an MCP interface for connecting compatible AI clients to Odoo tools, with scoped access, API keys, OAuth, and audit history.",
    features: ["MCP tools", "Access controls", "Audit history"],
    visual: "mcp",
    artTitle: "AI ↔ Odoo",
    artLabel: "MODEL CONTEXT PROTOCOL",
    context:
      "The integration provides a structured way for compatible MCP clients to interact with selected Odoo capabilities.",
    approach:
      "The project includes MCP tools and access-management features such as API keys, OAuth, scoped access, and audit history.",
    contributions: [
      "Worked on an MCP interface for configured Odoo tools and resources.",
      "Included API-key and OAuth access controls with scope and request restrictions.",
      "Added audit history and dashboard tools for reviewing integration activity.",
    ],
    outcome:
      "Compatible MCP clients can access selected Odoo capabilities through a controlled interface, subject to runtime configuration and user permissions.",
    modules: [
      {
        name: "MCP protocol endpoint",
        technicalName: "controllers/protocol.py · controllers/mcp.py",
        summary:
          "The endpoint exposes configured Odoo tools, resources, and prompts to compatible Model Context Protocol clients.",
        capabilities: [
          "Serve MCP protocol requests and Odoo-backed tools",
          "Expose configured resources and prompts",
          "Provide a playground for exploring the available operations",
        ],
      },
      {
        name: "API keys, OAuth & access controls",
        technicalName: "mcp_api_key.py · controllers/oauth.py",
        summary:
          "Credential and OAuth flows constrain which clients can call the Odoo integration.",
        capabilities: [
          "Create and manage API keys",
          "Restrict allowed models and methods per key",
          "Configure IP restrictions and rate limits",
          "Support OAuth authorization flows",
        ],
      },
      {
        name: "Audit history & dashboard",
        technicalName: "mcp_audit.py · mcp_dashboard.py · mcp_engine.py",
        summary:
          "Operational views and audit records help administrators inspect MCP activity.",
        capabilities: [
          "Record tool-call audit information",
          "Provide dashboard and playground views",
          "Execute tool calls under the configured Odoo user rather than superuser mode",
        ],
      },
    ],
    sourceNotes: [
      "The manifest identifies Moaz Nabil as the module author. Its advertised tool count is manifest text; the tools actually available depend on runtime configuration and the configured user's access rights.",
    ],
  },
  {
    slug: "pos-cash-movement-shortcuts",
    title: "POS cash movement shortcuts",
    role: "Point-of-sale workflow customization",
    category: "Point of sale",
    group: "operations",
    version: "Odoo 19",
    edition: "Not specified",
    technologies: ["Python", "JavaScript", "OWL", "XML / QWeb"],
    description:
      "Added cashier-facing cash-in and cash-out shortcuts to the Point of Sale, with visibility respecting cashier access.",
    features: ["Cash in / out", "POS navigation", "Role-aware UI"],
    visual: "pos",
    artTitle: "Quick cash moves",
    artLabel: "POINT OF SALE",
    context:
      "Cashiers need quick access to cash-in and cash-out actions from within the point-of-sale experience.",
    approach:
      "The customization adds navigation shortcuts for both cash movements and keeps their visibility aligned with cashier access.",
    contributions: [
      "Added cash-in and cash-out shortcuts to POS navigation.",
      "Used Odoo's existing cash-movement flow rather than creating a separate cash engine.",
      "Aligned shortcut visibility with cashier access.",
    ],
    outcome:
      "Cashiers can reach existing cash-movement actions directly from the POS interface.",
    modules: [
      {
        name: "POS cash-movement shortcuts",
        technicalName: "pos_cash_in_out_button",
        summary:
          "The add-on adds cashier-facing entry points to Odoo's existing cash-movement flow.",
        capabilities: [
          "Add cash-in and cash-out actions in POS navigation/control areas",
          "Call the existing POS cashMove() behavior rather than implement a separate cash engine",
          "Respect cashier access when showing the relevant shortcuts",
          "Compute the payment-method name on POS orders",
        ],
      },
    ],
    sourceNotes: [
      "The add-on's manifest does not name an author. The page describes the supplied local customization without asserting original ownership.",
    ],
  },
  {
    slug: "salesperson-commissions",
    title: "Salesperson commissions",
    role: "Commission workflow development",
    category: "Finance & reporting",
    group: "operations",
    version: "Odoo 19",
    edition: "Not specified",
    technologies: ["Python", "XML / QWeb", "PostgreSQL"],
    description:
      "Implemented commission records linked to sales orders, with salesperson assignment, approval status, payment dates, and references.",
    features: ["Commission rules", "Settlement payment", "Status tracking"],
    visual: "commission",
    artTitle: "Commission lifecycle",
    artLabel: "SALES INCENTIVES",
    context:
      "Commission calculations need to follow salesperson rules on confirmed sales while keeping settlement visible to finance.",
    approach:
      "The module supports fixed or percentage rules and period-based settlement; eligible records are paid through an outbound accounting payment.",
    contributions: [
      "Supported fixed-amount and percentage-based commission rules.",
      "Linked commission records to sales orders and assigned salespeople.",
      "Added period-based settlement through outbound accounting payments.",
    ],
    outcome:
      "Sales commissions are linked to confirmed sales and can be settled through an accounting payment workflow.",
    modules: [
      {
        name: "Product & salesperson commission rules",
        technicalName: "sales_commission_pro · sale_order_line.py",
        summary:
          "Commission configuration supports global defaults and rules associated with products or salespeople.",
        capabilities: [
          "Set a commission as a percentage or fixed amount per unit",
          "Configure product- and user-related commission rules",
          "Apply the calculated amount from sale-line subtotal when the order is confirmed",
          "Create commission records linked to the sale and salesperson",
        ],
      },
      {
        name: "Commission settlement & accounting payment",
        technicalName: "sales_commission_payment.py · sales_commission.py",
        summary:
          "A period-and-salesperson settlement selects eligible commissions and records their payment through accounting.",
        capabilities: [
          "Track commission records as pending, approved, or paid",
          "Select eligible commissions for a salesperson and period",
          "Check company, currency, and journal compatibility",
          "Post an outbound accounting payment and mark the selected commissions paid",
        ],
      },
    ],
    sourceNotes: [
      "The manifest identifies Isha Sojitra as the author. A commission_basis setting is present but is not used in the reviewed calculation, and the model exposes an approved state without a distinct approval action in the reviewed code.",
    ],
  },
  {
    slug: "shopify-odoo-integration",
    title: "Shopify ↔ Odoo integration",
    role: "Shopify–Odoo connector contribution",
    category: "Integrations",
    group: "integrations",
    version: "Odoo 19",
    edition: "Not specified",
    technologies: ["Python", "GraphQL Admin API", "OAuth", "Webhooks"],
    description:
      "Contributed to connector work for GraphQL-based commerce sync across orders, products, inventory, refunds, returns, payouts, and webhook jobs.",
    features: ["Orders & catalog", "Inventory & refunds", "Sync jobs"],
    visual: "shopify",
    artTitle: "Commerce sync",
    artLabel: "SHOPIFY + ODOO",
    context:
      "Commerce operations require Shopify and Odoo to exchange information across sales, catalog, stock, and post-order activity.",
    approach:
      "Contributions covered GraphQL-based synchronization for orders, products, inventory, refunds, returns, payouts, and webhook jobs.",
    contributions: [
      "Contributed to GraphQL-based store connection and webhook workflows.",
      "Worked across order, catalog, inventory, fulfillment, refund, and return synchronization.",
      "Covered payout-related information and queued synchronization jobs.",
    ],
    outcome:
      "The connector work spans core commerce and post-order synchronization between Shopify and Odoo; the bundled packages overlap and are not assumed to be installed together.",
    modules: [
      {
        name: "Store connection, OAuth & webhooks",
        technicalName: "eh_shopify_connector · ochre_shopify_connector",
        summary:
          "Store setup and webhooks coordinate authentication and incoming commerce events.",
        capabilities: [
          "Connect Shopify stores through OAuth and the GraphQL Admin API",
          "Receive configured webhook events through controller routes",
          "Schedule maintenance and polling work for connected stores",
        ],
      },
      {
        name: "Orders, fulfillment & post-order operations",
        technicalName: "eh_shopify_order_import.py · eh_shopify_refund.py",
        summary:
          "Order synchronization covers sales transactions and later fulfillment, return, and refund activity.",
        capabilities: [
          "Import, edit, and cancel Shopify orders",
          "Synchronize fulfillment and tracking information",
          "Handle refunds, returns, gift cards, and payouts/disputes",
          "Reconcile payout information with Odoo records",
        ],
      },
      {
        name: "Catalog, inventory & B2B",
        technicalName: "eh_shopify_product_sync.py · eh_shopify_store.py",
        summary:
          "Product and stock workflows keep store catalog information connected to Odoo.",
        capabilities: [
          "Synchronize customers and products/catalog data",
          "Publish products and manage inventory/location information",
          "Support B2B price lists",
        ],
      },
      {
        name: "Queued synchronization jobs",
        technicalName: "eh_shopify_job.py · data/ir_cron.xml",
        summary:
          "A job runner and scheduled tasks support deferred synchronization and housekeeping.",
        capabilities: [
          "Queue connector jobs for asynchronous processing",
          "Run scheduled maintenance/polling work",
          "Clean up queued job records on a schedule",
        ],
      },
    ],
    sourceNotes: [
      "Both bundled connector packages identify ERP Heritage and OPL-1; the source packages substantially overlap. This page reflects functionality in the supplied workspace and does not imply that both packages are installed or independently authored by the portfolio owner.",
    ],
  },
  {
    slug: "hospital-operations-billing",
    title: "Hospital operations & billing",
    role: "Hospital workflow contribution",
    category: "Healthcare",
    group: "industry",
    version: "Odoo",
    edition: "Not specified",
    technologies: ["Python", "XML / QWeb", "Website portal"],
    description:
      "Worked across hospital records for patients, physicians, departments, appointments, treatments, prescriptions, medications, and billing.",
    features: ["Patient & physician", "Appointments", "Prescriptions & billing"],
    visual: "hospital",
    artTitle: "Care operations",
    artLabel: "HOSPITAL MANAGEMENT",
    context:
      "Hospital teams maintain linked records for patients, physicians, departments, appointments, care, and related billing.",
    approach:
      "The work covers patient and physician records, departments, appointments, treatments, prescriptions, medications, and billing.",
    contributions: [
      "Worked across patient, physician, and department records.",
      "Covered appointment scheduling and website or portal appointment requests.",
      "Connected treatment and prescription information with sales and accounting workflows.",
    ],
    outcome:
      "The supplied hospital workflows connect patient records, appointments, care, and billing; this describes work with the provided module, not sole authorship.",
    modules: [
      {
        name: "Patient, physician & department records",
        technicalName: "om · patient.py · physician/doctor models · department.py",
        summary:
          "Core hospital records organize the people and departments involved in care.",
        capabilities: [
          "Maintain patient and physician/doctor records",
          "Organize departments and disease/medical information",
          "Capture medical and family history",
        ],
      },
      {
        name: "Appointments & schedules",
        technicalName: "appointment.py · schedule.py · cancel_appointment.py",
        summary:
          "Appointment records connect patient visits with physician schedules and consultation status.",
        capabilities: [
          "Manage schedules and appointment states",
          "Check for appointment overlap",
          "Link appointment records with prescriptions",
          "Support reminders and cancellation through a wizard",
          "Create appointments through website/portal routes",
        ],
      },
      {
        name: "Treatments, medication & billing",
        technicalName: "prescription.py · medical_history.py · sales/account integrations",
        summary:
          "Care records include treatment and prescriptions, with connected sales/accounting operations.",
        capabilities: [
          "Record treatments, medication, and prescriptions",
          "Link prescriptions and consumable products to accounting/sales flows",
          "Provide a patient-card report",
        ],
      },
      {
        name: "Website & portal appointment access",
        technicalName: "controller/controller.py",
        summary:
          "Controller routes expose patient appointment creation through the website/portal.",
        capabilities: [
          "Create appointment requests through website routes",
          "Connect portal input to the hospital appointment workflow",
        ],
      },
    ],
    sourceNotes: [
      "The manifest identifies “odoo mat,” not an employer or portfolio author. The page describes work with the supplied hospital module without claiming original authorship.",
    ],
  },
];

const priorityProjectSlugs = [
  "openeducat-enhancements",
  "oil-distribution-erp",
  "community-sabha-management",
];

const projectPriority = (slug: string) => {
  const index = priorityProjectSlugs.indexOf(slug);
  return index === -1 ? priorityProjectSlugs.length : index;
};

export const orderedProjects = [...projects].sort(
  (left, right) => projectPriority(left.slug) - projectPriority(right.slug),
);

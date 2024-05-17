const questions = [
    
    {
        question: "Raju, a 2- year-old child weighing 7 kg, presents to the emergency with a history of vomiting and diarrhea for the last 3 days. On examination, the skin pinch over anterior abdominal wall goes quickly to its original position. What is the interpretation of the skin pinch test in this child?",
        answers: [
          { text: "No dehydration", correct: false },
          { text: "Some dehydration", correct: false },
          { text: "Severe dehydration", correct: false },
          { text: "Skin pinch cannot be evaluated in this child", correct: true },
        ],
      },
    
    {
        question: "Which of the following is the most dangerous type of dehydration?",
        answers: [
          { text: "Hyponatremic", correct: false },
          { text: "Hypernatremic", correct: true },
          { text: "Isonatremic", correct: false },
          { text: "Non-diarrheal causes", correct: false },
        ],
      },
    
    
    {
        question: "What is the maximum concentration of dextrose that can be given through a peripheral vascular line in a neonate?",
        answers: [
          { text: "5%", correct: false },
          { text: "10%", correct: false },
          { text: "12.5%", correct: true },
          { text: "25%", correct: false },
        ],
      },
    
    
     {
        question: "A 7 year old boy weighing 30kgs is planned for surgical resection of a Wilms tumor. What is the daily maintenance fluid required for this child while he's NPO?",
        answers: [
          { text: "1000 mL", correct: false },
          { text: " 1700mL", correct: true },
          { text: "2500 mL", correct: false },
          { text: "3000mL", correct: false },
        ],
      },
    
    {
        question: "Which of the following is the most common type of shock in children?",
        answers: [
          { text: "Cardiogenic shock", correct: false },
          { text: "Hypovolemic shock", correct: true },
          { text: "Obstructive shock", correct: false },
          { text: "Septic shock", correct: false },
        ],
      },
    
    
    {
        question: "What is the size of the intravenous cannula shown below?",
        answers: [
          { text: "20G", correct: false },
          { text: "22G", correct: false },
          { text: "24G", correct: true },
          { text: "26G", correct: false },
        ],
      },
    
    
     {
        question: "All of the following are causes of normal anion gap metabolic acidosis, except",
        answers: [
          { text: "Renal tubular acidosis", correct: false },
          { text: "Diarrhea", correct: false },
          { text: "Acidosis due to intestinal bacterial overgrowth", correct: true },
          { text: "Urinary tract diversions", correct: false },
        ],
      },
    
    {
        question: "Rani, a 6-year-old girl, who is known to have thalassemia, presented to the emergency with weakness, chest pain, and palpitations. There is history of recent blood transfusion. The ECG of the child is given below. What could be the cause?",
        answers: [
          { text: "Acute pericarditis", correct: false },
          { text: "Iron-overload cardiomyopathy", correct: false },
          { text: "Pulmonary hypertension", correct: false },
          { text: "Hyperkalemia", correct: true },
        ],
      },
    
    
    {
        question: "A 10-year-old boy presents to the ER with hematemesis. On examination, splenomegaly is detected. The most likely diagnosis is __.",
        answers: [
          { text: "Mallory Weis tear", correct: false },
          { text: "Esophageal varices", correct: true },
          { text: "Kala azar", correct: false },
          { text: "AML", correct: false },
        ],
      },
    
    
     {
        question: "A 12-year-old child presents with hematemesis and splenomegaly. Which is the ideal investigation of choice?",
        answers: [
          { text: "Liver ultrasound", correct: false },
          { text: "Barium swallow", correct: false },
          { text: "CT", correct: false },
          { text: "Upper GI endoscopy", correct: true },
        ],
      },
    
    {
        question: "Inherited non-hemolytic unconjugated hyperbilirubinemia is __",
        answers: [
          { text: "Rotor syndrome", correct: false },
          { text: "Crigler Najjar type 2", correct: true },
          { text: "Dubin Johnson syndrome", correct: false },
          { text: "a-1 antitrypsin deficiency", correct: false },
        ],
      },
    
    
    {
        question: "A 9-year-old boy presents with mild jaundice. He gives a history of sore throat, fever and chills which subsided with antibiotics 2 days back. Investigations revealed an isolated conjugated hyperbilirubinemia. Liver histology revealed a black pigment. What is the most likely diagnosis?",
        answers: [
          { text: "Gilbert syndrome", correct: false },
          { text: "Crigler-Najjar syndrome", correct: false },
          { text: "Dubin-Johnson syndrome", correct: true },
          { text: "Rotor syndrome", correct: false },
        ],
      },
    
    
    
     {
        question: "Molecular defect causing liver disease in Dubin-Johnson syndrome is __.",
        answers: [
          { text: "ATP7A", correct: false },
          { text: "ATP7B", correct: false },
          { text: "ABCC2", correct: true },
          { text: "CFTR", correct: false },
        ],
      },
    
    {
        question: "All are true about Lucey Driscoll syndrome except",
        answers: [
          { text: "Increased unconjugated bilirubin", correct: false },
          { text: "Due to maternal antibody against fetal UGT1A1", correct: false },
          { text: "Transient familial neonatal hyperbilirubinemia is the other name", correct: false },
          { text: "Stop breast feeding as jaundice sets in", correct: true },
        ],
      },
    
    
    {
        question: "Slit lamp examination of a patient with liver disease showed following picture. Patient also had neurologic symptoms. A true statement about this disease is that __",
        answers: [
          { text: "It is autosomal dominant.", correct: false },
          { text: "Serum ceruplasmin levels are high", correct: false },
          { text: "Coombs-positive hemolytic anaemia may be present", correct: false },
          { text: "Patient should be treated with tetrathiomolybdate", correct: true },
        ],
      },
    
    
     {
        question: "All of the following are findings seen in Wilson's disease except __",
        answers: [
          { text: "Chronic pancreatitis", correct: true },
          { text: "Hepatomegaly", correct: false },
          { text: "Ascites and portal hypertension", correct: false },
          { text: "Renal Fanconi syndrome", correct: false },
        ],
      },
    
    {
        question: "In Wilson Disease, hepatic copper content usually exceeds __ µg/g dry weight.",
        answers: [
          { text: "150", correct: false },
          { text: "250", correct: true },
          { text: "350", correct: false },
          { text: "450", correct: false },
        ],
      },
    
    
    {
        question: "A 16-year-old boy presented with gradually progressive fatigue, arthralgia andjaundice. He had recently gotten a tattoo from a roadside artist. Investigations done revealed positive hepatitis C antibodies. Which of the following drugs cannot be used in the treatment of hepatitis C? ",
        answers: [
          { text: "Peginterferon", correct: false },
          { text: "Ribavirin", correct: false },
          { text: "Adefovir", correct: true },
          { text: "Sofosbuvir", correct: false },
        ],
      },
    
    
     {
        question: "A male infant was born to a mother with chronic hepatitis B infection. The infant is suspected to have been exposed at the time of delivery. At 4 months, which of thefollowing viral markers signifies ongoing viral replication in the infant?",
        answers: [
          { text: "Anti-HBs", correct: false },
          { text: "Anti-HBc", correct: false },
          { text: "HBe Ag", correct: true },
          { text: "HBs Ag", correct: false },
        ],
      },
    
    {
        question: "Gianotti-Crosti syndrome is seen as a complication of __ _",
        answers: [
          { text: "Wilson disease", correct: false },
          { text: "Hepatitis B", correct: true },
          { text: "Cholestasis", correct: false },
          { text: "Dubin Johnson syndrome", correct: false },
        ],
      },
    
    
    {
        question: "All of the following drugs are used in the treatment of hepatitis B except __",
        answers: [
          { text: "Interferon α2b", correct: false },
          { text: "Lamivudine", correct: false },
          { text: "Adefovir", correct: false },
          { text: "Ribavirin", correct: true },
        ],
      },
    
    
     {
        question: "A 5-year-old girl presented to the OPD with severe vomiting. Her condition rapidly  worsened, with the patient developing seizures. She had a history of influenza infection one week ago. Patient's liver biopsy will show __ _ ",
        answers: [
          { text: "Ring granuloma", correct: false },
          { text: "Centri zonal hemorrhagic necrosis", correct: false },
          { text: "Marked microvesicular steatotis", correct: true },
          { text: "Non-alcoholic steatohepatitis (NASH)", correct: false },
        ],
      },
    
    {
        question: "The autoantibody implicated in type 1 autoimmune hepatitis is ___",
        answers: [
          { text: "ANA", correct: true },
          { text: "Anti-LKM 1", correct: false },
          { text: "Anti-LKM 3", correct: false },
          { text: "ALC-1", correct: false },
        ],
      },
    
    
    {
        question: "A 2-week-old low-birth-weight neonate presents with jaundice. Stools are pale/clay   coloured. Liver biopsy shows loss of architecture. The most likely diagnosis is. _  ",
        answers: [
          { text: "Neonatal hepatitis", correct: true },
          { text: "Extrahepatic biliary atresia", correct: false },
          { text: "Wilson disease", correct: false },
          { text: "Hereditary hemochromatosis", correct: false },
        ],
      },
    
    
     {
        question: "A 3-week-old baby presents with jaundice. On examination, the baby is chubby and  not sick looking. Stools are acholic. USG shows triangular cord sign and liver biopsyshows bile duct proliferation. The most likely diagnosis is __ _ ",
        answers: [
          { text: "Neonatal hepatitis", correct: false },
          { text: "Hallervorden Spatz disease", correct: false },
          { text: "Wilson disease", correct: false },
          { text: "Extrahepatic biliary atresia", correct: true },
        ],
      },
    
    {
        question: "A 2-year-old boy presented with nausea and vomiting in the casualty. There was a history of accidental ingestion of paracetamol tablets 2 days ago. The pattern of liver  injury that can be expected in this case is __ ",
        answers: [
          { text: "Cholestasis", correct: false },
          { text: "Centrilobular necrosis", correct: true },
          { text: "Microvesicular steatosis", correct: false },
          { text: "Fibrosis", correct: false },
        ],
      },
    
    
    {
        question: "Hydrops of the gallbladder is not associated with ____",
        answers: [
          { text: "Group A streptococcal pharyngitis", correct: false },
          { text: "Kawasaki disease", correct: false },
          { text: "Total parenteral nutrition", correct: false },
          { text: "Cystic fibrosis", correct: true },
        ],
      },
    
    
     {
        question: "The commonest indication for liver transplantation in children is __ _",
        answers: [
          { text: "Acute viral hepatitis", correct: false },
          { text: "Biliary atresia", correct: true },
          { text: "Caroli disease", correct: false },
          { text: "Hepatcellular carcinoma", correct: false },
        ],
      },
    
    {
        question: "Which of the following is not a common feature of liver abscess?",
        answers: [
          { text: "Hepatomegaly", correct: false },
          { text: "Tenderness in the right hypochondrium", correct: false },
          { text: "Jaundice", correct: true },
          { text: "Fever with chills", correct: false },
        ],
      },
    
    
    {
        question: "An aphthous ulcer may arise due to many factors. All of the following have been implicated except _",
        answers: [
          { text: "Injury to soft tissue", correct: false },
          { text: "Herpes simplex virus (HSV)", correct: true },
          { text: "Emotional stress", correct: false },
          { text: "Inflammatory bowel disease", correct: false },
        ],
      },
    
    
     {
        question: "Cheilitis is caused by _",
        answers: [
          { text: "Frequent lip licking", correct: false },
          { text: "Bacterial infection", correct: false },
          { text: "Vitamin deficiency", correct: false },
          { text: "All of the above", correct: true },
        ],
      },
    
    {
        question: "Ankyloglossia is due to",
        answers: [
          { text: "Abnormally short lingual frenulum", correct: true },
          { text: "Abnormally long lingual frenulum", correct: false },
          { text: "Fissured tongue", correct: false },
          { text: "Abnormally large tongue", correct: false },
        ],
      },
    
    
    {
        question: "The following image depicts:",
        answers: [
          { text: "Esophageal atresia in TEF type A", correct: true },
          { text: "Esophageal atresia in TEF type D", correct: false },
          { text: "Esophageal atresia in TEF type C", correct: false },
          { text: "Esophageal atresia in TEF type B", correct: false },
        ],
      },
    
    
     {
        question: "All of the following are components of VACTERL association except _",
        answers: [
          { text: "Vertebral", correct: false },
          { text: "Renal", correct: false },
          { text: "Radial", correct: false },
          { text: "Lymphedema", correct: true },
        ],
      },
    
    {
        question: "Dysphagia lusoria is caused by the extrinsic compression produced by",
        answers: [
          { text: "Aberrant left subclavian artery", correct: false },
          { text: "Aberrant right subclavian artery", correct: true },
          { text: "Paraesophageal lymph nodes", correct: false },
          { text: "Mediastinal tumors", correct: false },
        ],
      },
    
    
    {
        question: "A full-term infant with a history of polyhydramnios in utero presents with respiratory distress soon after birth. On examination, frothing at the mouth is observed. The investigation of choice is",
        answers: [
          { text: "Chest radiography", correct: false },
          { text: "Lateral neck radiography", correct: false },
          { text: "Passing a nasogastric tube with subsequent chest radiography", correct: true },
          { text: "Erect X-Ray abdomen scan", correct: false },
        ],
      },
    
    
    
     {
        question: "A 3-year-old child presents to the emergency department after accidental ingestion of a household cleaning agent containing alkali. Which of the following could be done as the first step in treatment?",
        answers: [
          { text: "Administer mild acid", correct: false },
          { text: "Administer milk", correct: true },
          { text: "Administer rice", correct: false },
          { text: "Gag the child to induce emesis", correct: false },
        ],
      },
    
    {
        question: "Acid ingestion produces damage by",
        answers: [
          { text: "Liquefactive necrosis", correct: false },
          { text: "Coagulative necrosis", correct: true },
          { text: "Saponification of fat", correct: false },
          { text: "Thermic reaction", correct: false },
        ],
      },
    
    
    {
        question: "A 3-year-old boy was brought to the ER after ingestion of a foreign body 30 minutes ago. X-ray findings are suggestive of a button battery in the esophagus. The appropriate step in management is _",
        answers: [
          { text: "Urgent endoscopy and removal", correct: true },
          { text: "Observation and follow up in 24 hours", correct: false },
          { text: "Observation until the foreign body passes out in faeces", correct: false },
          { text: "Repeat Xray after 4 hours", correct: false },
        ],
      },
    
    
     {
        question: "A 3-year-old child accidentally ingested a coin 6 hours ago. The child is asymptomatic, x-ray neck is as shown below. What is the next best step?",
        answers: [
          { text: "Endoscopic removal within 24 hours", correct: false },
          { text: "Observe for 24 hours", correct: true },
          { text: "Immediate endoscopic removal", correct: false },
          { text: "Dislodge the coin to the stomach using Ryle's tube", correct: false },
        ],
      },
    
    {
        question: "Hypokalemic hypochloremic metabolic alkalosis is an electrolyte and acid-base imbalance characteristically seen in _",
        answers: [
          { text: "Gastric volvulus", correct: false },
          { text: "Adrenogenital syndrome", correct: false },
          { text: "Congenital hypertrophic pyloric stenosis", correct: true },
          { text: "Malrotation with volvulus", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following drugs is associated with hypertrophic pyloric stenosis?",
        answers: [
          { text: "Misoprostol", correct: false },
          { text: "Erythromycin", correct: true },
          { text: "Thalidomide", correct: false },
          { text: "Phenytoin", correct: false },
        ],
      },
    
    
     {
        question: "A 3-week-old infant presented with non-bilious projectile vomiting and lethargy since 1 day. On abdominal examination, an olive-like mass was palpated. What is the investigation of choice for the diagnosis of this condition?",
        answers: [
          { text: "Barium meal", correct: false },
          { text: "Ultrasound", correct: true },
          { text: "CT scan", correct: false },
          { text: "MRI", correct: false },
        ],
      },
    
    {
        question: "Consider the following: 1. Visible peristalsis 2. Bilious vomiting 3. Palpable mass 4. Melena Which of the above is/are the feature(s) of infantile hypertrophic pyloric stenosis?",
        answers: [
          { text: "1, 2, and 3", correct: false },
          { text: "1 and 2 only", correct: false },
          { text: "1 and 3 only", correct: true },
          { text: "4 only", correct: false },
        ],
      },
    
    
    {
        question: "A two-day-old neonate presents with bilious vomiting; the X-ray image obtained is shown below. What is the most likely diagnosis?",
        answers: [
          { text: "Duodenal atresia", correct: true },
          { text: "Ileal atresia", correct: false },
          { text: "Jejunal atresia", correct: false },
          { text: "Sigmoid volvulus", correct: false },
        ],
      },
    
    
     {
        question: "A 5-year-old boy presented with abdominal pain and constipation. Erect X-ray scan of the abdomen showed the following picture. The most likely diagnosis is _",
        answers: [
          { text: "Intussusception", correct: false },
          { text: "Gastric volvulus", correct: false },
          { text: "Sigmoid volvulus", correct: true },
          { text: "Hypertrophic pyloric stenosis", correct: false },
        ],
      },
    
    {
        question: "All of the following statements regarding Hirschsprung disease are true except",
        answers: [
          { text: "It is uncommon in preterm infants.", correct: false },
          { text: "More common in boys than girts", correct: false },
          { text: "It is associated with Edward syndrome.", correct: true },
          { text: "It is associated with Down’s syndrome", correct: false },
        ],
      },
    
    
    {
        question: "A 4-year-old child was brought to the hospital with a history of loose stools. No history of fever or blood in stools. Mother says he is irritable and eagerly drinks water if given. On examination, eyes are sunken and in the skin pinch test, the skin retracted within two seconds but not immediately. What treatment is advisable for the child?",
        answers: [
          { text: "Give oral fluids and zinc supplementation only and ask mother to come back if danger sign develops.", correct: true },
          { text: "Give oral fluids and ask mother to continue the same and visit again the next day.", correct: false },
          { text: "Consider severe dehydration start IV fluids. IV antibiotics. and refer to higher centre", correct: false },
          { text: "Wait and observe.", correct: false },
        ],
      },
    
    
    
     {
        question: "The following tests can be used for the diagnosis of celiac disease except _",
        answers: [
          { text: "Anti-gliadin antibodies", correct: false },
          { text: "Anti-nuclear antibodies", correct: true },
          { text: "Anti-endomysial antibodies", correct: false },
          { text: "Anti-tissue transglutaminase antibodies", correct: false },
        ],
      },
    
    {
        question: "A 9-year-old boy was presented with vomiting for 5 days. His sister, who has coeliac disease, has had similar symptoms. lgA-tissue transglutaminase titre is 5 times the upper limit of normal. Which of the following is not an extraintestinal manifestation of this condition?",
        answers: [
          { text: "Polycythemia", correct: true },
          { text: "Osteoporosis", correct: false },
          { text: "Short stature", correct: false },
          { text: "Alopecia", correct: false },
        ],
      },
    
    
    {
        question: "In which of the following conditions is flat intestinal mucosa a characteristic finding?",
        answers: [
          { text: "Tropical sprue", correct: false },
          { text: "Giardiasis", correct: false },
          { text: "Bacterial overgrowth", correct: false },
          { text: "All of the above", correct: true },
        ],
      },
    
    
     {
        question: "Which of the following pathogens is responsible for the largest fraction of deaths due to gastroenteritis in children less than 5 years?",
        answers: [
          { text: "Norwalk virus", correct: false },
          { text: "Rotavirus", correct: true },
          { text: "Clostridium difficile", correct: false },
          { text: "Shigella dysenteriae", correct: false },
        ],
      },
    
    {
        question: "Consider the following A. Selenium B. Zinc C. Vitamin D D. Vitamin A The deficiency of which of the above factor increases the risk of death due to diarrhea?",
        answers: [
          { text: "Only A", correct: false },
          { text: "A and C", correct: false },
          { text: "B only", correct: false },
          { text: "B and D", correct: true },
        ],
      },
    
    
    {
        question: "In a 12-month-old child with diarrhea, the required dose of zinc is",
        answers: [
          { text: "1 mg/day for 10-14 days", correct: false },
          { text: "10 mg/day for 10-14 days", correct: false },
          { text: "15 mg/day for 10-14 days.", correct: false },
          { text: "20 mg/day for 10-14 days", correct: true },
        ],
      },
    
    
     {
        question: "Persistent diarrhea is defined as diarrheal episodes that last for_ weeks or more.",
        answers: [
          { text: "1", correct: false },
          { text: "2", correct: true },
          { text: "3", correct: false },
          { text: "4", correct: false },
        ],
      },
    
    {
        question: "Fasting provides relief in",
        answers: [
          { text: "Dysentery", correct: false },
          { text: "Infective diarrhea", correct: false },
          { text: "Osmotic diarrhea", correct: true },
          { text: "Secretory diarrhea", correct: false },
        ],
      },
    
    
    {
        question: "The most common finding in children with severe viral enteritis is _",
        answers: [
          { text: "Isotonic dehydration with acidosis", correct: true },
          { text: "Isotonic dehydration with alkalosis", correct: false },
          { text: "Hypotonic dehydration with acidosis", correct: false },
          { text: "Hypotonic dehydration with alkalosis", correct: false },
        ],
      },
    
    
     {
        question: "Which of the following is a false statement about low-osmolarity oral rehydration solution (ORS)?",
        answers: [
          { text: "Glucose concentration 75 mmol/L", correct: false },
          { text: "Sodium concentration 75 mmol/L", correct: false },
          { text: "Osmolarity is 311 mosm/L", correct: true },
          { text: "Potassium is 20 mmol/L", correct: false },
        ],
      },
    
    {
        question: "A 12-year-old girl presents to the emergency department with sudden-onset severe generalised abdominal pain associated with nausea, vomiting, and diarrhoea. On examination, her abdomen is tense with generalised tenderness and guarding. No bowel sounds are present. What is the best diagnostic investigation in this child?",
        answers: [
          { text: "USG", correct: true },
          { text: "MRI", correct: false },
          { text: "CT scan", correct: false },
          { text: "X-ray", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following statements is NOT true about intussusception?",
        answers: [
          { text: "New rotavirus vaccine is not associated with increased risk.", correct: true },
          { text: "Submucosal lipomas can lead to recurrent intussusception", correct: false },
          { text: "The most common cause is idiopathic", correct: false },
          { text: "The most common location is ileocolic region", correct: false },
        ],
      },
    
    
    
     {
        question: "The condition associated with rectal prolapse in childhood is _",
        answers: [
          { text: "Pertussis", correct: false },
          { text: "Trichuriasis", correct: false },
          { text: "Chronic constipation", correct: false },
          { text: "All of the above", correct: true },
        ],
      },
    
    {
        question: "The most common developmental anomaly of the pancreas is",
        answers: [
          { text: "Pancreas divisum", correct: true },
          { text: "Annular pancreas", correct: false },
          { text: "Pancreatic pseudocyst", correct: false },
          { text: "Cystic fibrosis", correct: false },
        ],
      },
    
    
    {
        question: "The most common cause of pancreatic insufficiency in childhood is",
        answers: [
          { text: "Chronic pancreatitis", correct: false },
          { text: "Cystic fibrosis", correct: true },
          { text: "Shwachman-Diamond syndrome", correct: false },
          { text: "Congenital pancreatic lipase deficiency", correct: false },
        ],
      },
    
    
     {
        question: "A 12-year-old boy presented to the emergency department with fever, severe epigastric pain, nausea and vomiting since 6 hours. Which of the following tests is not useful in the diagnosis of acute pancreatitis?",
        answers: [
          { text: "Serum lipase", correct: false },
          { text: "Serum amylase", correct: false },
          { text: "Serum elastase", correct: true },
          { text: "CT abdomen", correct: false },
        ],
      },
    
    {
        question: "Which of the following statements is true about Peutz-Jegher's syndrome?",
        answers: [
          { text: "Hamartomatous polyps are seen in the intestine", correct: true },
          { text: "Adenomatous polyps are seen in the intestine.", correct: false },
          { text: "The most common pattern of inheritance is autosomal recessive", correct: false },
          { text: "No risk of malignancies", correct: false },
        ],
      },
    
    
    {
        question: "A 14-year-old girl presents with frequent episodes of flushing and watery diarrhea.  Which of the following laboratory tests would help in diagnosing carcinoid syndrome?",
        answers: [
          { text: "Urinary 5-hydroxy indole acetic acid (HIAA)", correct: true },
          { text: "Urinary vanillylmandelic acid (VMA)", correct: false },
          { text: "Serum ACTH", correct: false },
          { text: "Urinary catecholamines", correct: false },
        ],
      },
    
    
     {
        question: "A child presents with fluid coming out of umbilicus on straining. What is the diagnosis?",
        answers: [
          { text: "Patent vitellointestinal duct", correct: false },
          { text: "Urachal fistula", correct: true },
          { text: "Umbilical hernia", correct: false },
          { text: "Gastroschisis", correct: false },
        ],
      },
    
    {
        question: "The most common chromosomal syndrome is __ _",
        answers: [
          { text: "Fragile-X- syndrome", correct: false },
          { text: "Trisomy 18", correct: false },
          { text: "Trisomy 21", correct: true },
          { text: "Trisomy 13", correct: false },
        ],
      },
    
    
    {
        question: "A 39-year-old pregnant woman was found to have an abnormal NT scan. An amniocentesis done revealed a chromosomal karyotype of 47, XX, +21. This result most commonly occurs due to?",
        answers: [
          { text: "Reciprocal translocation", correct: false },
          { text: "Non-disjunction in maternal meiosis", correct: true },
          { text: "Mosaicism", correct: false },
          { text: "Non-disjunction in paternal meiosis", correct: false },
        ],
      },
    
    
     {
        question: "The Simian crease is not seen in __",
        answers: [
          { text: "Down syndrome", correct: false },
          { text: "Trisomy 13", correct: false },
          { text: "Cri du chat syndrome", correct: false },
          { text: "Cystic fibrosis", correct: true },
        ],
      },
    
    {
        question: "A girl is born at term after an uneventful pregnancy and delivery. On examination, she is noted to be hypotonic, has a protruding tongue, low set ears, an upward slant to the eyes with epicanthal folds, and a single palmar crease. On cardiac evaluation, what is the most common lesion expected in this syndrome?",
        answers: [
          { text: "Ventricular septal defect", correct: false },
          { text: "Endocardial cushion defect", correct: true },
          { text: "Tetralogy of Fallot", correct: false },
          { text: "Coarctation of aorta", correct: false },
        ],
      },
    
    
    {
        question: "All are findings associated with the prenatal diagnosis for Down's syndrome except",
        answers: [
          { text: "Reduced femur and humerus length", correct: false },
          { text: "Nuchal translucency >3 mm", correct: false },
          { text: "Increased umbilical blood flow", correct: true },
          { text: "Ventricular septal defect may be present", correct: false },
        ],
      },
    
    
    
     {
        question: "A 30-year-old primigravida underwent nuchal translucency scan at 14 weeks which was highly suggestive of Down's syndrome. She is planned for a triple test at week 16. Which of the following is not included in the triple test?",
        answers: [
          { text: "β-hcG", correct: false },
          { text: "Alpha-fetoprotein", correct: false },
          { text: "Inhibin A", correct: true },
          { text: "Serum oestriol level", correct: false },
        ],
      },
    
    {
        question: "The following karyotype is suggestive of which disorder?",
        answers: [
          { text: "Patau syndrome", correct: true },
          { text: "Edward's syndrome", correct: false },
          { text: "Alagile syndrome", correct: false },
          { text: "William's syndrome", correct: false },
        ],
      },
    
    
    {
        question: "What is the condition affecting this newborn with facial dysmorphisms and the features shown below?",
        answers: [
          { text: "Edward's syndrome", correct: true },
          { text: "Turner's syndrome", correct: false },
          { text: "Alagile syndrome", correct: false },
          { text: "William's syndrome", correct: false },
        ],
      },
    
    
     {
        question: "This child presents to you with learning disabilities. On investigation, horseshoe kidneys and streak gonads are noted. What is your diagnosis?",
        answers: [
          { text: "Klinefelter's syndrome", correct: false },
          { text: "Noonan's syndrome", correct: false },
          { text: "Turner's syndrome", correct: true },
          { text: "Fragile X- syndrome", correct: false },
        ],
      },
    
    {
        question: "Barr body is absent in female having, __ _",
        answers: [
          { text: "46 XX genome", correct: false },
          { text: "45 XO genome", correct: true },
          { text: "47 XXX", correct: false },
          { text: "All of the above", correct: false },
        ],
      },
    
    
    {
        question: "A child presents with antimongoloid slant, pulmonary stenosis, short stature, and undescended testis. The likely diagnosis is ___ _",
        answers: [
          { text: "Hypoparathyroidism", correct: false },
          { text: "Noonan syndrome", correct: true },
          { text: "Klinefelter’s syndrome", correct: false },
          { text: "XYY sex chromosomes", correct: false },
        ],
      },
    
    
     {
        question: "What is the abnormality seen in the following karyotype?",
        answers: [
          { text: "Gynecomastia with long thin limbs", correct: true },
          { text: "Short stature with webbed neck", correct: false },
          { text: "High-pitched cry", correct: false },
          { text: "Round face with protruding tongue", correct: false },
        ],
      },
    
    {
        question: "Which of the following is not observed in cri-du-chat syndrome?",
        answers: [
          { text: "Hypertonia", correct: true },
          { text: "Characteristic shrill cry", correct: false },
          { text: "Microcephaly", correct: false },
          { text: "Mental retardation", correct: false },
        ],
      },
    
    
    {
        question: "All are features in Treacher-Collin syndrome except. __ _",
        answers: [
          { text: "Coloboma of inferior lid", correct: false },
          { text: "Mandibular hypoplasia", correct: false },
          { text: "Low intelligence", correct: true },
          { text: "Cleft palate", correct: false },
        ],
      },
    
    
     {
        question: "Which of the following is not a feature of Pierre- Robin syndrome?",
        answers: [
          { text: "Hearing defects", correct: false },
          { text: "Coloboma iris", correct: true },
          { text: "Respiratory distress", correct: false },
          { text: "Mandibular hypoplasia", correct: false },
        ],
      },
    
    {
        question: "Which of the following is not a feature of DiGeorge syndrome?",
        answers: [
          { text: "Thymic aplasia", correct: false },
          { text: "Hypocalcemia", correct: false },
          { text: "Cleft palate", correct: false },
          { text: "22p11 deletion", correct: true },
        ],
      },
    
    
    {
        question: "A 14-year-old boy was found to have a height of more than 95 percentile for his age and an arm-span to height ratio of more than 1.05. On further examination, he had flat feet, mild scoliosis, long slender fingers, a positive thumb sign and wrist sign. What other complicatmons can be expected in this child?",
        answers: [
          { text: "Pulmonary hypertension", correct: false },
          { text: "Mental retardation", correct: false },
          { text: "Emphysema", correct: false },
          { text: "Subluxation of lens", correct: true },
        ],
      },
    
    
    
     {
        question: "Maternal disomy of chromosome 15 is seen in __ _",
        answers: [
          { text: "Prader- Willi syndrome", correct: true },
          { text: "Klinefelter's syndrome", correct: false },
          { text: "Angelman syndrome", correct: false },
          { text: "Turner's syndrome", correct: false },
        ],
      },
    
    {
        question: "Triangular facies is indicative of __",
        answers: [
          { text: "Russell-Silver syndrome", correct: true },
          { text: "Down's syndrome", correct: false },
          { text: "Mobius syndrome", correct: false },
          { text: "Nephrotic syndrome", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following is used in gene therapy?",
        answers: [
          { text: "Electroporation", correct: true },
          { text: "Electrofocusing", correct: false },
          { text: "Selectively targeted recombination", correct: false },
          { text: "Intracytoplasmic injection", correct: false },
        ],
      },
    
    
     {
        question: "The following is the finding noted in a 12-month-old baby who is growing well and developing normally since birth. Which of the following is a true statement regarding this finding?",
        answers: [
          { text: "Down syndrome is the diagnosis", correct: false },
          { text: "Maternal history of phenytoin intake during pregnancy should be suspected", correct: false },
          { text: "Simple reassurance should be provided", correct: true },
          { text: "Chromosomal analysis should be done to rule out other chromosomal abnormalities", correct: false },
        ],
      },
    
    {
        question: "Non-invasive prenatal screening (NIPS) is particularly useful in the modern era of diagnosis in clinical genetics. Which of the following statements is not true regarding this test?",
        answers: [
          { text: "Useful in screening for aneuploidies", correct: false },
          { text: "Evaluates maternal blood for fetal abnormalities", correct: false },
          { text: "High positive predictive value", correct: true },
          { text: "Positive test need confirmation by invasive testing", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following symbol denotes dizygotic twins in a pedigree chart?",
        answers: [
          { text: "Option A", correct: false },
          { text: "Option B", correct: true },
          { text: "Option C", correct: false },
          { text: "Option D", correct: false },
        ],
      },
    
    
     {
        question: "Which pattern of inheritance does the pedigree chart denote?",
        answers: [
          { text: "Autosomal-dominant disorder", correct: false },
          { text: "X- linked dominant disorder", correct: false },
          { text: "Autosomal-recessive disorder", correct: true },
          { text: "X- linked recessive disorder", correct: false },
        ],
      },
    
    {
        question: "Inheritance of ABO group is _",
        answers: [
          { text: " X-linked inheritance", correct: false },
          { text: "Recessive inheritance", correct: false },
          { text: "Mitochondrial inheritance", correct: false },
          { text: "Codominance", correct: true },
        ],
      },
    
    
    {
        question: "A particular genetic disorder appears in three consecutive generations of a family without any sex predilection. It was also noticed that phenotypically normal family members were having healthy offspring. What is the pattern of inheritance in this disorder?",
        answers: [
          { text: "Autosomal recessive", correct: false },
          { text: "Autosomal dominant", correct: true },
          { text: "Mitochondrial inheritance", correct: false },
          { text: "Uniparental disomy", correct: false },
        ],
      },
    
    
     {
        question: "Which of the following diseases is autosomal dominant?",
        answers: [
          { text: "Albinism", correct: false },
          { text: "Sickle cell anemia", correct: false },
          { text: "Thalassemia", correct: false },
          { text: "Tuberous sclerosis", correct: true },
        ],
      },
    
    {
        question: "The first child born to parents suffering from achondroplasia was not suffering from  the condition. What are the chances of developing achondroplasia in the second child?",
        answers: [
          { text: "0%", correct: false },
          { text: "75%", correct: true },
          { text: "25%", correct: false },
          { text: "100%", correct: false },
        ],
      },
    
    
    {
        question: "A 3-year-old boy presented with short stature and delayed motor milestones. An x-ray showed a trident hand as given below. Which of the following is the most likely diagnosis?",
        answers: [
          { text: "Achondroplasia", correct: true },
          { text: "Mucopolysaccharidosis", correct: false },
          { text: "Osteopetrosis", correct: false },
          { text: "Cleidocranial dysostosis", correct: false },
        ],
      },
    
    
     {
        question: "Identify the disease in which the following ophthalmological condition can be seen.",
        answers: [
          { text: "Tuberous sclerosis", correct: false },
          { text: "Sturge-Weber syndrome", correct: false },
          { text: "Neurofibromatosis", correct: true },
          { text: "Wilson disease", correct: false },
        ],
      },
    
    {
        question: "Neurofibromatosis 1 criteria include all except",
        answers: [
          { text: "Two or more iris hamartomas", correct: false },
          { text: "Acoustic neuromas", correct: true },
          { text: "Dysplasia of the sphenoidal and tibial bone", correct: false },
          { text: "Cafe-au-lait spots", correct: false },
        ],
      },
    
    
    {
        question: "Consider the following statements about cafe- au- lait macules associated with neurofibromas (A) Present at birth (B) Cafe- au- lait macules are not specific for neurofibromatosis (C) They have a predeliction for the face and trunk; spares extremities (D) Macules > 5 mm in post-pubertal individuals is diagnostic.",
        answers: [
          { text: "Statements A and C true, B and D false", correct: false },
          { text: "Statements B and C true, A and D false", correct: false },
          { text: "Statements B and D true, A and C false", correct: false },
          { text: "Statements A and B true, C and D false", correct: true },
        ],
      },
    
    
     {
        question: "Which of the following is not seen in tuberous sclerosis?",
        answers: [
          { text: "Astrocytoma", correct: false },
          { text: "Rhabdomyoma", correct: false },
          { text: "Optic glioma", correct: true },
          { text: "Subependymal nodule", correct: false },
        ],
      },
    
    {
        question: "The first child of a normal couple was diagnosed to have cystic fibrosis. What is the percentage of chances for the second child to be affected?",
        answers: [
          { text: "50%", correct: false },
          { text: "0%", correct: false },
          { text: "25%", correct: true },
          { text: "100%", correct: false },
        ],
      },
    
    
    {
        question: "If the husband is heterozygous and the wife is homozygous for an autosomal-recessive gene, what will be the outcome?",
        answers: [
          { text: "75% children affected", correct: false },
          { text: "No child affected, but all are carriers", correct: false },
          { text: "50% children affected, rest are carriers", correct: true },
          { text: "25% children affected rest are earners", correct: false },
        ],
      },
    
    
     {
        question: "Kinky hair disease is a disorder where the affected child has peculiar white stubby hair, growth retardation, brain degeneration, and dies by age of 2 years. Mrs. A is hesitant about having children because her two sisters had sons who had died from kinky hair disease. Her mother's brother also died of the same condition. Which is the possible mode of inheritance in her family?",
        answers: [
          { text: "X- linked recessive", correct: true },
          { text: "X- linked dominant", correct: false },
          { text: "Autosomal recessive", correct: false },
          { text: "Autosomal dominant", correct: false },
        ],
      },
    
    {
        question: "Which of the following is not true regarding Ataxia telangiectasia?",
        answers: [
          { text: "Mutations in 11q gene is implicated", correct: false },
          { text: "Follows autosomal dominant mode of inheritance", correct: true },
          { text: "Humoral and cellular immunodeficiency", correct: false },
          { text: "Linked to adenocarcinomas", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following is X- linked recessive disorder?",
        answers: [
          { text: "Wiskott-Aldrich syndrome", correct: true },
          { text: "Rett Syndrome", correct: false },
          { text: "Thalassemia", correct: false },
          { text: "Alkaptonuria", correct: false },
        ],
      },
    
    
     {
        question: "A 12-year-old boy presented with progressive muscular weakness showing the following finding, and it was found that the child is unable to get up from squatting position. He was diagnosed with hereditary muscular disorder. What is the mode of inheritance in this disorder?",
        answers: [
          { text: "Autosomal dominant", correct: false },
          { text: "X- linked recessive", correct: true },
          { text: "Mitochodrial", correct: false },
          { text: "X- linked dominant", correct: false },
        ],
      },
    
    {
        question: "Wiskott- Aldrich syndrome is characterized by all of the following except. __",
        answers: [
          { text: "X- linked recessive mode of inheritance", correct: false },
          { text: "Atopic dermatitis and eczema during infancy", correct: false },
          { text: "Thrombocytopenia", correct: false },
          { text: "lgM is increased", correct: true },
        ],
      },
    
    
    {
        question: "Which of the following diseases is represented by the pedigree shown below?",
        answers: [
          { text: "Wiskott-Aldrich syndrome", correct: false },
          { text: "Lesh-Nyhan syndrome", correct: false },
          { text: "Hypophosphatemic rickets", correct: true },
          { text: "Fabry disease", correct: false },
        ],
      },
    
    
    
     {
        question: "The gene involved in Rett's syndrome is __",
        answers: [
          { text: "P53", correct: false },
          { text: "Rb", correct: false },
          { text: "MeCP2", correct: true },
          { text: "FGFR3", correct: false },
        ],
      },
    
    {
        question: "All of the following diseases are associated with trinucleotide repeat sequence except _",
        answers: [
          { text: "Huntington's disease", correct: false },
          { text: "Fredreich's ataxia", correct: false },
          { text: "Myotonic dystrophy", correct: false },
          { text: "Hereditary motor-sensory neuropathy", correct: true },
        ],
      },
    
    
    {
        question: "An 8-year-old boy was brought for psychiatric evaluation for intellectual disability. On examination, his IQ was 45. He has a long face, large ears and macroorchidism. What is the trinucleotide repeat mutation associated with this syndrome?",
        answers: [
          { text: "CGG", correct: true },
          { text: "GAA", correct: false },
          { text: "CAG", correct: false },
          { text: "CTG", correct: false },
        ],
      },
    
    
     {
        question: "All are true about fragile X syndrome except _",
        answers: [
          { text: "Large head", correct: false },
          { text: "Large nose", correct: true },
          { text: "Large ear", correct: false },
          { text: "Large testis", correct: false },
        ],
      },
    
    {
        question: "Type of inheritance in MELAS is",
        answers: [
          { text: "X- linked Recessive", correct: false },
          { text: "Autosomal Recessive", correct: false },
          { text: "Mitochondrial", correct: true },
          { text: "X- linked Dominant", correct: false },
        ],
      },
    
    
    {
        question: "Phenotypic expression of a gene depending on the parent of origin is referred to as__ _",
        answers: [
          { text: "Genomic imprinting", correct: true },
          { text: "Mosaicism", correct: false },
          { text: "Anticipation", correct: false },
          { text: "Nonpenetrance", correct: false },
        ],
      },
    
    
     {
        question: "Multifactorial inheritance is most likely to play a significant role in the appearance of",
        answers: [
          { text: "Achondroplasia", correct: false },
          { text: "Lysosomal storage disease", correct: false },
          { text: "Cleft lip", correct: true },
          { text: "Huntington disease", correct: false },
        ],
      },
    
    {
        question: "Which of the following is an X-linked disorder?",
        answers: [
          { text: "Color blindness", correct: true },
          { text: "Thalassemia", correct: false },
          { text: "Sickle cell anemia", correct: false },
          { text: "Cystic fibrosis", correct: false },
        ],
      },
    
    
    {
        question: "Hematuria in children is defined as the presence of at least ___ RBCs per high power field in uncentrifuged urine.",
        answers: [
          { text: "3", correct: false },
          { text: "4", correct: false },
          { text: "5", correct: true },
          { text: "6", correct: false },
        ],
      },
    
    
     {
        question: "Recurrent gross hematuria is seen in all of the following conditions except _",
        answers: [
          { text: "Berger's disease", correct: false },
          { text: "Hemolytic uremic syndrome", correct: true },
          { text: "Hereditary nephritis", correct: false },
          { text: "Idiopathic hypercalciuria", correct: false },
        ],
      },
    
    {
        question: "All of the following are classic features of nephritic syndrome except _",
        answers: [
          { text: "Cola colored urine", correct: false },
          { text: "Frothy urine", correct: true },
          { text: "Decreased urine output", correct: false },
          { text: "Hypertension", correct: false },
        ],
      },
    
    
    {
        question: "A 7-year-old boy was brought to the OPD with complaints of cola-coloured urine and facial puffiness since 3 days. He has a history of fever with a sore throat that resolved 2 weeks back. Which of the following findings is consistent with the diagnosis of post-streptococcal glomerulonephritis?",
        answers: [
          { text: "C3 level increases and ASO level increases", correct: false },
          { text: "C3 level decreases and ASO level increases", correct: true },
          { text: "C3 level decreases and ASO level decreases", correct: false },
          { text: "C3 level increases and ASO level decreases", correct: false },
        ],
      },
    
    
    
     {
        question: "Which among the following is not a characteristic feature of hematuria associated with glomerulonephritis?",
        answers: [
          { text: "Dysmorphic RBC in urine", correct: false },
          { text: "RBC cast in urine", correct: false },
          { text: "Painful hematuria", correct: true },
          { text: "Cola coloured urine", correct: false },
        ],
      },
    
    {
        question: "Which of the following is true about post-streptococcal nephritic syndrome?",
        answers: [
          { text: "Serum triglyceride levels are elevated.", correct: false },
          { text: "Microscopic hematuria resolves in 4 weeks.", correct: false },
          { text: "Serum C3 levels are normal.", correct: false },
          { text: "Renal biopsy is indicated in severe impairment of renal function", correct: true },
        ],
      },
    
    
    {
        question: "In what type of glomerular disease are the following findings seen? Light microscopy: Enlarged, pale glomeruli Electron microscopy: Epithelial humps",
        answers: [
          { text: "Post-streptococcal glomerulonephritis", correct: true },
          { text: "Rapidly progressive glomerulonephritis", correct: false },
          { text: "Focal segmental glomerulonephritis", correct: false },
          { text: "Minimal change disease", correct: false },
        ],
      },
    
    
     {
        question: "An 8-year-old boy presented with cola-colored urine, oliguria, and facial puffiness for 3 days. On examination, he is found to be hypertensive and his serum C3 levels are low. The urine test is positive for albumin. He had a history of skin infection 4 weeks back. The appropriate step in the management of this patient is __",
        answers: [
          { text: "Renal biopsy", correct: false },
          { text: "Supportive therapy", correct: true },
          { text: "Steroids", correct: false },
          { text: "Cyclosporine", correct: false },
        ],
      },
    
    {
        question: "All of the following complications are commonly seen in PSGN except",
        answers: [
          { text: "LVF", correct: false },
          { text: "Hypertensive encephalopathy", correct: false },
          { text: "Hyperkalemia", correct: false },
          { text: "Bleeding diasthesis", correct: true },
        ],
      },
    
    
    {
        question: "A child developed dark coloured urine and flank pain 2 days after the development of an upper respiratory tract infection. The physician suspects IgA nephropathy. What is the location of cellular injury in this condition?",
        answers: [
          { text: "Epithelial cell", correct: false },
          { text: "Basement membrane", correct: false },
          { text: "Endothelial cell", correct: false },
          { text: "Mesangial cell", correct: true },
        ],
      },
    
    
     {
        question: "ANCA-positive, pauci-immune glomerulonephritis include",
        answers: [
          { text: "Wegener' s granulomatosis", correct: false },
          { text: "Microscopic polyangiitis", correct: false },
          { text: "Churg-Strauss syndrome", correct: false },
          { text: "All of the above", correct: true },
        ],
      },
    
    {
        question: "An 8-year-old girl presented with complaints of cough, hemoptysis, swelling of legs and dark coloured urine. Urinalysis was notable for hematuria and proteinuria. Serum anti-GBM antibodies were positive. What is the most likely diagnosis?",
        answers: [
          { text: "IgA nephropathy", correct: false },
          { text: "Minimal change disease", correct: false },
          { text: "Goodpasture syndrome", correct: true },
          { text: "Membranous nephropathy", correct: false },
        ],
      },
    
    
    {
        question: "A 9-year-old boy presents with gross hematuria, 2 days after an episode of diarrhea. The serum C3 levels are normal. Light microscopy demonstrates focal and segmental mesangial proliferation and increased mesangial matrix in the glomerulus. The probable diagnosis is _",
        answers: [
          { text: "Berger's disease", correct: true },
          { text: "PSGN", correct: false },
          { text: "Microangiopathic hemolytic anemia", correct: false },
          { text: "None of the above", correct: false },
        ],
      },
    
    
     {
        question: "A 9-year-old boy has swelling of knee joints and non blanching rashes as seen in the picture. Urine exam reveals hematuria +++and proteinuria +. Microscopic analysis of his renal biopsy specimen is most likely to show",
        answers: [
          { text: "Tubular necrosis", correct: false },
          { text: "Visceral podocyte fusion", correct: false },
          { text: "Mesangial deposits of lgA", correct: true },
          { text: "Basement membrane thickening", correct: false },
        ],
      },
    
    {
        question: "All are features of Alport syndrome except _",
        answers: [
          { text: "Anterior lenticonus", correct: false },
          { text: "Conductive hearing loss", correct: true },
          { text: "Gross hematuria", correct: false },
          { text: "Proteinuria", correct: false },
        ],
      },
    
    
    {
        question: "A 16-year-old boy presented with dark coloured urine. Urinalysis was notable for macroscopic hematuria and heavy proteinuria. His father is a known case of Alport syndrome. What defect is responsible for this condition?",
        answers: [
          { text: "Fibrillin", correct: false },
          { text: "Type IV collagen", correct: true },
          { text: "Amyloid", correct: false },
          { text: "Tau", correct: false },
        ],
      },
    
    
    
     {
        question: "All of the following syndromes are associated with renal disease except",
        answers: [
          { text: "Lowe syndrome", correct: false },
          { text: "Denys-Drash syndrome", correct: false },
          { text: "Alport syndrome", correct: false },
          { text: "Sinding-Larsen-Johansson syndrome", correct: true },
        ],
      },
    
    {
        question: "Nephrotic range proteinuria is defined as proteinuria of> __ mg/m2/hr and urine protein: creatinine ratio of > _",
        answers: [
          { text: "40 and 2", correct: true },
          { text: "30 and 1.5", correct: false },
          { text: "3.5and 2", correct: false },
          { text: "4 and 1.5", correct: false },
        ],
      },
    
    
    {
        question: "Microalbuminuria is defined as a urinary albumin excretion rate of",
        answers: [
          { text: "30-300 mg/ 24 hrs", correct: true },
          { text: "> 300 mg/ 24 hrs", correct: false },
          { text: "> 150 mg/ 24 hrs", correct: false },
          { text: "> 300 µg/ 24 hrs", correct: false },
        ],
      },
    
    
     {
        question: "All are the usual features of nephrotic syndrome except _",
        answers: [
          { text: "Hypoalbuminemia", correct: false },
          { text: "Hyperlipidemia", correct: false },
          { text: "Hematuria", correct: true },
          { text: "Edema", correct: false },
        ],
      },
    
    {
        question: "The most common cause of nephrotic syndrome in children is _",
        answers: [
          { text: "Minimal change disease", correct: true },
          { text: "Membranous nephropathy", correct: false },
          { text: "IgA nephropathy", correct: false },
          { text: "Alport syndrome", correct: false },
        ],
      },
    
    
    {
        question: "Minimal change disease is due to _",
        answers: [
          { text: "Flattening of podocytes", correct: true },
          { text: "Immune complex deposition", correct: false },
          { text: "Anti-GBM antibodies", correct: false },
          { text: "Endothelial cell disease", correct: false },
        ],
      },
    
    
     {
        question: "What is the cause of hypercoagulability in nephrotic syndrome?",
        answers: [
          { text: "Vascular stasis due to hemoconcentration and intravascular volume depletion", correct: false },
          { text: "Increase in hepatic production of fibrinogen", correct: false },
          { text: "Urinary loss of antithrombin III and protein S", correct: false },
          { text: "All of the above", correct: true },
        ],
      },
    
    {
        question: "A 5-year-old boy presents with a short history of facial oedema that has now progressed to total body swelling involving the face, abdomen, scrotum, and feet. Urinalysis revealed protein 4+ with no hematuria and a urine protein: creatinine ratio of 3. What is the initial treatment of choice for this child?",
        answers: [
          { text: "Prednisolone", correct: true },
          { text: "Cyclophosphamide", correct: false },
          { text: "Levamisole", correct: false },
          { text: "Cyclosporine", correct: false },
        ],
      },
    
    
    {
        question: "Finnish-type congenital nephrotic syndrome is caused by a mutation in the __ gene.",
        answers: [
          { text: "NPHS 1 (nephrin)", correct: true },
          { text: "NPHS 2 (podocin)", correct: false },
          { text: " WT 1 (Wilms tumor suppressor gene)", correct: false },
          { text: "LMX1B", correct: false },
        ],
      },
    
    
     {
        question: "Congenital nephrotic syndrome is defined as nephrotic syndrome manifesting",
        answers: [
          { text: " At birth", correct: false },
          { text: "At birth or within 3 months of life", correct: true },
          { text: "At birth or within 6 months of life", correct: false },
          { text: "At birth or within 1 year of life", correct: false },
        ],
      },
    
    {
        question: "FSGS is caused by mutations in the __ gene.",
        answers: [
          { text: "NPHS 1 (nephrin)", correct: false },
          { text: "NPHS 2 (podocin)", correct: true },
          { text: "WT 1 (Wilms tumor suppressor gene)", correct: false },
          { text: "LMX1B", correct: false },
        ],
      },
    
    
    {
        question: "Steroid-resistant nephrotic syndrome is defined as failure to achieve remission after weeks----- of corticosteroid therapy.",
        answers: [
          { text: "4", correct: false },
          { text: "6", correct: false },
          { text: "8", correct: true },
          { text: "12", correct: false },
        ],
      },
    
    
    
     {
        question: "An 11-year-old boy with a chronic hepatitis B infection develops nephrotic syndrome. What would be the most likely pathology encountered in renal biopsy of this child?",
        answers: [
          { text: "Focal Segmental Glomerular Sclerosis", correct: false },
          { text: "Membrano proliferative Glomerulonephritis", correct: false },
          { text: "Anti GBM disease", correct: false },
          { text: "Membranous nephropathy", correct: true },
        ],
      },
    
    {
        question: "A child suffering from steroid-dependent nephrotic syndrome is brought to the OPD for vaccination. Which of the following is true about vaccination in this child?",
        answers: [
          { text: "All live vaccines under NIS can be given as per schedule", correct: false },
          { text: "All killed vaccines under NIS can be given", correct: true },
          { text: "Only pneumococcal vaccine should be given to the child in acute phase", correct: false },
          { text: "Live vaccines are contraindicated in the child's sibling", correct: false },
        ],
      },
    
    
    {
        question: "Unilateral renal agenesis is associated with",
        answers: [
          { text: "Hypogonadism", correct: false },
          { text: "Hiatus hernia", correct: false },
          { text: "Polycystic kidney", correct: false },
          { text: "Single umbilical artery", correct: true },
        ],
      },
    
    
     {
        question: "The most common cause of abdominal mass in neonates is",
        answers: [
          { text: "Neuroblastoma", correct: false },
          { text: "Wilms tumor", correct: false },
          { text: "Multicystic dysplastic kidney", correct: true },
          { text: "Distended bladder", correct: false },
        ],
      },
    
    {
        question: "Ask-Upmark kidney refers to",
        answers: [
          { text: "Renal cystic dysplasia", correct: false },
          { text: "Renal segmental hypoplasia", correct: true },
          { text: "Renal hypodysplasia", correct: false },
          { text: "Renal medullary hyperplasia", correct: false },
        ],
      },
    
    
    {
        question: "Hepatic fibrosis is associated with _",
        answers: [
          { text: "Medullary cystic kidney", correct: false },
          { text: "Acquired cystic Kidney disease", correct: false },
          { text: "Autosomal dominant polycystic Kidney disease", correct: false },
          { text: "Autosomal recessive polycystic kidney disease", correct: true },
        ],
      },
    
    
     {
        question: "Chromosomes associated with the autosomal-dominant polycystic kidney disease are",
        answers: [
          { text: " Chr 14 and 6", correct: false },
          { text: "Chr 8 and 14", correct: false },
          { text: "Chr 4 and 16", correct: true },
          { text: "Chr 12 and 16", correct: false },
        ],
      },
    
    {
        question: "The most common cause of urinary tract infection in children is _",
        answers: [
          { text: "E.coli", correct: true },
          { text: "Stapylococcus", correct: false },
          { text: "Proteus", correct: false },
          { text: "Klebsiella", correct: false },
        ],
      },
    
    
    {
        question: "A 9-month-old girl presents with a 24-hour history of high fever and vomiting. She is mildly dehydrated and has no localised findings on examination. Urine culture was suggestive of a urinary tract infection. Which of the following is recommended as the 1st line imaging investigation for this child?",
        answers: [
          { text: "Voiding cystourethrogram", correct: false },
          { text: "Micturating cystogram", correct: false },
          { text: "Ultrasonogram", correct: true },
          { text: "DMSA scan", correct: false },
        ],
      },
    
    
     {
        question: "A 12-year-old girl presented with features of hematuria, headache, and blurring of vision, with a past history of recurrent UTI in childhood. On examination, she was found to have BP of 150/100 mmHg; broad casts are seen in urine analysis and mild renal scarring is noted. The most likely diagnosis is _",
        answers: [
          { text: "Acute tubular necrosis", correct: false },
          { text: "Congenital ureteropelvic junction obstruction", correct: false },
          { text: "Posterior urethral valve with chronic renal failure", correct: false },
          { text: "Reflux uropathy with chronic renal failure", correct: true },
        ],
      },
    
    {
        question: "The most common anomaly in a child presenting with recurrent urinary tract infections is -",
        answers: [
          { text: "Posterior urethral valves", correct: false },
          { text: "Vesicoureteric reflux", correct: true },
          { text: "Urinary bladder stone", correct: false },
          { text: "Pelvi ureteric junction", correct: false },
        ],
      },
    
    
    {
        question: "A 6-month-old girl has recurrent UTI. Voiding cystourethrogram shows the reflux of urine into the upper collecting systems without any dilation. Under which grade of vesicoureteral reflux will this presentation be classified?",
        answers: [
          { text: "Grade III", correct: false },
          { text: "Grade II", correct: true },
          { text: "Grade I", correct: false },
          { text: "Grade IV", correct: false },
        ],
      },
    
    
    
     {
        question: "Antenatal hydronephrosis due to PUJ obstruction is defined as the anteroposterior diameter of the renal pelvis of more than __ in the third trimester.",
        answers: [
          { text: "6mm", correct: false },
          { text: "7mm", correct: true },
          { text: "11 mm", correct: false },
          { text: "15 mm", correct: false },
        ],
      },
    
    {
        question: "A physician suspects vesicoureteric reflux in a girl with a history of recurrent urinary tract infections. What is the investigation of choice in this child?",
        answers: [
          { text: "Ultrasound abdomen", correct: false },
          { text: "MRI", correct: false },
          { text: "Voiding cystourethrogram", correct: true },
          { text: "DMSA scan", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following is true about Hinman syndrome?",
        answers: [
          { text: "Neurogenic bladder variety", correct: false },
          { text: "Failure of internal sphincter to relax", correct: false },
          { text: "Common in infants", correct: false },
          { text: "Anticholinergic therapy", correct: true },
        ],
      },
    
    
     {
        question: "A young girl presents with the complaints of continuous dribbling of urine. However, she also voids normally. Her parents tell you that she had never been totally dry since her birth. What is the most likely diagnosis?",
        answers: [
          { text: "Ectopic ureter", correct: true },
          { text: "Ureterocele", correct: false },
          { text: "Congenital megaureter", correct: false },
          { text: "Vesicoureteric reflux", correct: false },
        ],
      },
    
    {
        question: "The milestone shown in the image should disappear by _",
        answers: [
          { text: "12 weeks", correct: false },
          { text: "16 weeks", correct: false },
          { text: "20 weeks", correct: true },
          { text: "24 weeks", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following can a three year old perform?",
        answers: [
          { text: "Skips but falls", correct: false },
          { text: "Hop on 1 foot", correct: false },
          { text: "Walk upstairs with alternate foot", correct: true },
          { text: "Walk downstairs with alternate foot", correct: false },
        ],
      },
    
    
     {
        question: "Cruising is a developmental milestone attained at the age of _",
        answers: [
          { text: "8 months", correct: false },
          { text: "10 months", correct: true },
          { text: "13 months", correct: false },
          { text: "15 months", correct: false },
        ],
      },
    
    {
        question: "By what age does a child make a tower of 6 blocks?",
        answers: [
          { text: "15 months", correct: false },
          { text: "24months", correct: true },
          { text: "18 months", correct: false },
          { text: "36 months", correct: false },
        ],
      },
    
    
    {
        question: "The milestone shown in the image is attained by the age of",
        answers: [
          { text: "4 months", correct: false },
          { text: "6 months", correct: false },
          { text: "9 months", correct: false },
          { text: "12 months", correct: true },
        ],
      },
    
    
     {
        question: "At what age does an infant hold its head steady when pulled to sit, without bobbing motion, and laugh out loud?",
        answers: [
          { text: "2 months", correct: false },
          { text: "4 months", correct: true },
          { text: "5 months", correct: false },
          { text: "6 months", correct: false },
        ],
      },
    
    {
        question: "A child can copy circle, but he cannot copy a square. If the development of this child is normal, at this age, he should be able to",
        answers: [
          { text: "Tell a story", correct: false },
          { text: "Skip", correct: false },
          { text: "Ask meaning of words", correct: false },
          { text: "Know his name and gender", correct: true },
        ],
      },
    
    
    {
        question: "Match the following milestones with corresponding age. A) Handedness B) Taste perception C) Monosyllabic babble D) Smiles in response to voice 1) At Birth 2) 24-36 months 3) 1.5 months 4) 6 months",
        answers: [
          { text: "A1, B4, C3, D2", correct: false },
          { text: "A2, B1, C4, D3", correct: true },
          { text: "A2, B1, C3, D4", correct: false },
          { text: "A1, B3, C4, D2", correct: false },
        ],
      },
    
     {
        question: "Which of the following statements regarding milestones is true?",
        answers: [
          { text: "A child laughs out loud at 5 months", correct: false },
          { text: "An infant roll over at 5 months.", correct: true },
          { text: "Mouthing is seen at 4 months.", correct: false },
          { text: " A child can turns pages of a book at 11 months.", correct: false },
        ],
      },
    
    {
        question: "Social smile is typically seen at __ months and stranger anxiety, at _ _ months",
        answers: [
          { text: "2 and 6", correct: true },
          { text: "1 and 6", correct: false },
          { text: "6 and 12", correct: false },
          { text: "6 and 9", correct: false },
        ],
      },
    
    
    {
        question: "Understanding that objects continue to exist even when not seen is called _",
        answers: [
          { text: "Symbolic transformation", correct: false },
          { text: "Transitional object", correct: false },
          { text: "Separation anxiety", correct: false },
          { text: "None of the above", correct: true },
        ],
      },
    
    
     {
        question: "Developmental delay should be suspected, if the developmental quotient (DQ) is below ___ %.",
        answers: [
          { text: "80", correct: false },
          { text: "77", correct: false },
          { text: "70", correct: true },
          { text: "65", correct: false },
        ],
      },
    
    {
        question: "Which of the following developmental milestone corresponds to the age of five years?",
        answers: [
          { text: "Dressing as well as undressing fully", correct: true },
          { text: "Hopping and telling stories", correct: false },
          { text: "Riding a tricycle and making a tower of 9 blocks", correct: false },
          { text: "Establishment of handedness and parallel play", correct: false },
        ],
      },
    
    
    {
        question: "Bidextrous reach is seen at what age?",
        answers: [
          { text: "4 months", correct: true },
          { text: "5 months", correct: false },
          { text: "6 months", correct: false },
          { text: "7 months", correct: false },
        ],
      },
    
    
     {
        question: "All of the following are definitive tests for developmental surveillance except",
        answers: [
          { text: "Bayley-II", correct: false },
          { text: "Stanford-Binet", correct: false },
          { text: "Denver-II", correct: true },
          { text: "Wechsler", correct: false },
        ],
      },
    
    {
        question: "A child was able to count 4 pennies but was unable to name 4 colors. The probable age of the child is",
        answers: [
          { text: "3 years", correct: false },
          { text: "4 years", correct: true },
          { text: "5 years", correct: false },
          { text: "6 years", correct: false },
        ],
      },
    
    
    {
        question: "At what age does a child walk without support and use polysyllabic jargon?",
        answers: [
          { text: "9 months", correct: false },
          { text: "2 years", correct: false },
          { text: " 6 months", correct: false },
          { text: "15 months", correct: true },
        ],
      },
    
    
     {
        question: "A child can draw a triangle at the age of",
        answers: [
          { text: "3 years", correct: false },
          { text: "5 years", correct: true },
          { text: "6 years", correct: false },
          { text: " 4 years", correct: false },
        ],
      },
    
    {
        question: "Absence of which of the following milestones in a three-year-old child is called delayed development?",
        answers: [
          { text: "Hopping on one leg", correct: false },
          { text: "Drawing a square", correct: false },
          { text: "Feeding by spoon", correct: true },
          { text: "Passing a ball to someone", correct: false },
        ],
      },
    
    
    {
        question: "A baby girl can stand without support. The highest fine motor skill she is expected to have is -",
        answers: [
          { text: "Bidextrous reach", correct: false },
          { text: "Unidextrous reach", correct: false },
          { text: "Immature pincer grasp", correct: false },
          { text: "Mature pincer grasp", correct: true },
        ],
      },
    
    
    
     {
        question: "An infant was born at 32 weeks of gestation 24 weeks back. What is the age of the child to be assumed while undertaking developmental assessment?",
        answers: [
          { text: "24 weeks", correct: false },
          { text: "20weeks", correct: false },
          { text: "16 weeks", correct: true },
          { text: "19 weeks", correct: false },
        ],
      },
    
    {
        question: "All of the following statements are true regarding principles of development except?",
        answers: [
          { text: "Development is a continuous process", correct: false },
          { text: "Specific responses replace mass activity as the child matures", correct: false },
          { text: "It progresses in cephalocaudal direction", correct: false },
          { text: "In the extremities, development occurs distal to proximal", correct: true },
        ],
      },
    
    
    {
        question: "Which of the following fetal hormones does not play any role in fetal growth?",
        answers: [
          { text: "Insulin", correct: false },
          { text: "Glucocorticoid", correct: false },
          { text: "Thyroxine", correct: false },
          { text: "Growth hormone", correct: true },
        ],
      },
    
    
     {
        question: "Birth weight quadruples by the age of",
        answers: [
          { text: "2 years", correct: true },
          { text: "1 year", correct: false },
          { text: "1.5 years", correct: false },
          { text: "3 years", correct: false },
        ],
      },
    
    {
        question: "Which of the following statements is false?",
        answers: [
          { text: "Head circumference should be measured within 24 hours after birth.", correct: true },
          { text: "Head circumference equals chest circumference at 1 year of age.", correct: false },
          { text: "A boys height at 2 and half years is half of his adult height.", correct: false },
          { text: "A girls height at 2 years is half of her adult height.", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following statements regarding teeth eruption is false?",
        answers: [
          { text: "The first primary tooth to erupt is the lower central incisor.", correct: false },
          { text: "All primary teeth erupt earlier in the lower jaw than their counterparts in the upper jaw.", correct: true },
          { text: "The first secondary tooth to erupt is the first molar.", correct: false },
          { text: "No teeth till 13 months of age is called delayed eruption.", correct: false },
        ],
      },
    
    
     {
        question: "A 3-year-old boy presented for routine follow up of his anthropometric surveillance. He was found to be 90cms tall with a lower segment of 45 cm. Which among the following is the most likely diagnosis in this child?",
        answers: [
          { text: "Congenital hypothyroidism", correct: false },
          { text: "Achondroplasia", correct: false },
          { text: "Rickets", correct: false },
          { text: "Spondyloepiphyseal dysplasia", correct: true },
        ],
      },
    
    {
        question: "A 14 year old boy is suspected to be a victim of child physical abuse. Which of the following is the x-ray of choice to determine his skeletal age?",
        answers: [
          { text: "X-ray of the hip", correct: false },
          { text: "X-ray of the hands and wrist", correct: false },
          { text: "X-ray of the shoulder", correct: false },
          { text: "X-ray of the elbow and hip", correct: true },
        ],
      },
    
    
    {
        question: "Which of the following statements is true?",
        answers: [
          { text: "Head reaches 90% of adult size at 1 year.", correct: false },
          { text: "Lymphoid growth follows a sigmoid-shaped pattern.", correct: false },
          { text: "Perinatal period is between 28 weeks of gestation to 7 days after birth.", correct: false },
          { text: "Growth of child is cephalocaudal and distal to proximal.", correct: true },
        ],
      },
    
    
     {
        question: "A 6 year old boy is brought to the clinician by his parents with complaints of inattention and hyperactivity in the child. They suspect the child is suffering from ADHD. The current criteria for diagnosis of ADHD include all of the following except",
        answers: [
          { text: "Must begin before 7 years of age", correct: true },
          { text: "Should be present at least for 6 months.", correct: false },
          { text: "Should be reported by independent observers.", correct: false },
          { text: "Behavior must be developmentally inappropriate in two or more settings.", correct: false },
        ],
      },
    
    {
        question: "In the image given below, the weight and height of a child are plotted against his age in years.  Identify the correct statement.",
        answers: [
          { text: "WHO growth charts used now are developed by National Center for Health Statistics (NCHS).", correct: false },
          { text: "Short stature is defined as a height below 5th percentile.", correct: false },
          { text: "Puberty in this child will be normal.", correct: false },
          { text: "Bone age of this child is less than chronological age.", correct: true },
        ],
      },
    
    
    {
        question: "Identify the correct statement from the following.",
        answers: [
          { text: "Children with pica are at increased risk of megaloblastic anemia.", correct: false },
          { text: "Breath-holding spells are associated with hypertonia.", correct: false },
          { text: "Thumb sucking in a child is a way of discharging tension.", correct: true },
          { text: "Bedwetting after a period of 3 months of dryness at night is called secondary enuresis", correct: false },
        ],
      },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      
]







const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    backButton.innerHTML = "Back";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    
    if(answer.correct){
        button.dataset.correct = answer.correct;  
    }
    button.addEventListener("click", selectAnswer)

})
}


function resetState(){
nextButton.style.display = "none";
backButton.style.display = "none";

while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);

}
}

function selectAnswer(e){

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
    selectedBtn.classList.add("inCorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
        button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "inline";
    backButton.style.display = "inline";

}


function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Solve Again";
    nextButton.style.display = "inline"
    backButton.style.display = "inline"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else { showScore()}
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
    handleNextButton();
    } else{
        startQuiz();
    }
});

function handlebackButton(){
  currentQuestionIndex--;
  if(currentQuestionIndex < questions.length){
      showQuestion();
  } else { showScore()}
}

backButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length) {
  handlebackButton();
  } else{
      startQuiz();
  }
});
startQuiz();
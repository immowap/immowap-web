import type { FAQCategory } from "../faq-types";
import { eigennutzungCategoryEn } from "./eigennutzung";
import { kapitalanlageCategoryEn } from "./kapitalanlage";
import { fixFlipCategoryEn } from "./fix-flip";
import { sanierungCategoryEn } from "./sanierung-modernisierung";
import { mehrfamilienhaeuserCategoryEn } from "./mehrfamilienhaeuser";
import { gewerbeimmobilienCategoryEn } from "./gewerbeimmobilien";

export const faqCategoriesEn: FAQCategory[] = [
  eigennutzungCategoryEn,
  kapitalanlageCategoryEn,
  fixFlipCategoryEn,
  sanierungCategoryEn,
  mehrfamilienhaeuserCategoryEn,
  gewerbeimmobilienCategoryEn,
];

export type EditToolbarItem = {
  icon: string;
  label: string;
  active?: boolean;
};

export const EDIT_TOOLBAR: EditToolbarItem[] = [
  { icon: "text_fields", label: "Text" },
  { icon: "image", label: "Media" },
  { icon: "dashboard_customize", label: "Layout", active: true },
  { icon: "palette", label: "Theme" },
  { icon: "auto_fix_high", label: "Refine" },
];

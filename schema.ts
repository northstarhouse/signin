import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";

export const volunteers = pgTable("volunteers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  photoUrl: text("photo_url"),
  isCheckedIn: boolean("is_checked_in").default(false),
  lastCheckIn: timestamp("last_check_in"),
  lastCheckOut: timestamp("last_check_out"),
  createdAt: timestamp("created_at").defaultNow(),
});

CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`email` text NOT NULL,
	`birthday` integer NOT NULL,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` integer DEFAULT CURRENT_TIMESTAMP
);

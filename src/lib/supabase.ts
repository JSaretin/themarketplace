import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
	'https://qcpljsvxwlgagwoudhdv.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjcGxqc3Z4d2xnYWd3b3VkaGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA4ODI5MDIsImV4cCI6MTk3NjQ1ODkwMn0.ANWTv5TVbnETcp7VvKHV0uJM4tzeka9nU8PFy_mUM8Q'
);

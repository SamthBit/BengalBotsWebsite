export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
	public: {
		Tables: {
			Members: {
				Row: {
					created_at: string;
					id: number;
					Name: string | null;
					Role: string | null;
				};
				Insert: {
					created_at?: string;
					id?: number;
					Name?: string | null;
					Role?: string | null;
				};
				Update: {
					created_at?: string;
					id?: number;
					Name?: string | null;
					Role?: string | null;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}

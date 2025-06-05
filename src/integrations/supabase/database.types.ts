export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      account_products: {
        Row: {
          account_id: string
          amount_invested: number | null
          created_at: string | null
          cusip: string
          deactivated_at: string | null
          id: string
          intrinsic_value: number | null
          is_active: boolean | null
          last_seen_in_upload: string | null
          notional_value: number
          purchase_date: string | null
          updated_at: string | null
        }
        Insert: {
          account_id: string
          amount_invested?: number | null
          created_at?: string | null
          cusip: string
          deactivated_at?: string | null
          id?: string
          intrinsic_value?: number | null
          is_active?: boolean | null
          last_seen_in_upload?: string | null
          notional_value: number
          purchase_date?: string | null
          updated_at?: string | null
        }
        Update: {
          account_id?: string
          amount_invested?: number | null
          created_at?: string | null
          cusip?: string
          deactivated_at?: string | null
          id?: string
          intrinsic_value?: number | null
          is_active?: boolean | null
          last_seen_in_upload?: string | null
          notional_value?: number
          purchase_date?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "account_products_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "client_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "account_products_cusip_fkey"
            columns: ["cusip"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["cusip"]
          },
        ]
      }
      account_products_backup: {
        Row: {
          account_id: string | null
          created_at: string | null
          cusip: string | null
          id: string | null
          notional_value: number | null
          purchase_date: string | null
          updated_at: string | null
        }
        Insert: {
          account_id?: string | null
          created_at?: string | null
          cusip?: string | null
          id?: string | null
          notional_value?: number | null
          purchase_date?: string | null
          updated_at?: string | null
        }
        Update: {
          account_id?: string | null
          created_at?: string | null
          cusip?: string | null
          id?: string | null
          notional_value?: number | null
          purchase_date?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      advisors: {
        Row: {
          aggregated_needs: Json | null
          created_at: string | null
          deactivated_at: string | null
          id: string
          is_active: boolean | null
          last_seen_in_upload: string | null
          name: string
          strategy_distribution: Json | null
          total_aum: number | null
        }
        Insert: {
          aggregated_needs?: Json | null
          created_at?: string | null
          deactivated_at?: string | null
          id?: string
          is_active?: boolean | null
          last_seen_in_upload?: string | null
          name: string
          strategy_distribution?: Json | null
          total_aum?: number | null
        }
        Update: {
          aggregated_needs?: Json | null
          created_at?: string | null
          deactivated_at?: string | null
          id?: string
          is_active?: boolean | null
          last_seen_in_upload?: string | null
          name?: string
          strategy_distribution?: Json | null
          total_aum?: number | null
        }
        Relationships: []
      }
      advisors_backup: {
        Row: {
          aggregated_needs: Json | null
          created_at: string | null
          id: string | null
          name: string | null
          strategy_distribution: Json | null
          total_aum: number | null
        }
        Insert: {
          aggregated_needs?: Json | null
          created_at?: string | null
          id?: string | null
          name?: string | null
          strategy_distribution?: Json | null
          total_aum?: number | null
        }
        Update: {
          aggregated_needs?: Json | null
          created_at?: string | null
          id?: string | null
          name?: string | null
          strategy_distribution?: Json | null
          total_aum?: number | null
        }
        Relationships: []
      }
      client_accounts: {
        Row: {
          account_name: string
          account_value: number | null
          advisor_id: string
          amount_invested: number | null
          created_at: string | null
          deactivated_at: string | null
          id: string
          implementation_status: string | null
          is_active: boolean | null
          last_seen_in_upload: string | null
          portfolio_state: Json | null
          strategy_assignment: string
          target_allocation_amount: number | null
          violations: Json | null
        }
        Insert: {
          account_name: string
          account_value?: number | null
          advisor_id: string
          amount_invested?: number | null
          created_at?: string | null
          deactivated_at?: string | null
          id?: string
          implementation_status?: string | null
          is_active?: boolean | null
          last_seen_in_upload?: string | null
          portfolio_state?: Json | null
          strategy_assignment: string
          target_allocation_amount?: number | null
          violations?: Json | null
        }
        Update: {
          account_name?: string
          account_value?: number | null
          advisor_id?: string
          amount_invested?: number | null
          created_at?: string | null
          deactivated_at?: string | null
          id?: string
          implementation_status?: string | null
          is_active?: boolean | null
          last_seen_in_upload?: string | null
          portfolio_state?: Json | null
          strategy_assignment?: string
          target_allocation_amount?: number | null
          violations?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "client_accounts_advisor_id_fkey"
            columns: ["advisor_id"]
            isOneToOne: false
            referencedRelation: "advisors"
            referencedColumns: ["id"]
          },
        ]
      }
      client_accounts_backup: {
        Row: {
          account_name: string | null
          account_value: number | null
          advisor_id: string | null
          created_at: string | null
          id: string | null
          implementation_status: string | null
          portfolio_state: Json | null
          strategy_assignment: string | null
          target_allocation_amount: number | null
          violations: Json | null
        }
        Insert: {
          account_name?: string | null
          account_value?: number | null
          advisor_id?: string | null
          created_at?: string | null
          id?: string | null
          implementation_status?: string | null
          portfolio_state?: Json | null
          strategy_assignment?: string | null
          target_allocation_amount?: number | null
          violations?: Json | null
        }
        Update: {
          account_name?: string | null
          account_value?: number | null
          advisor_id?: string | null
          created_at?: string | null
          id?: string | null
          implementation_status?: string | null
          portfolio_state?: Json | null
          strategy_assignment?: string | null
          target_allocation_amount?: number | null
          violations?: Json | null
        }
        Relationships: []
      }
      data_update_logs: {
        Row: {
          account_products_rows_after: number | null
          account_products_rows_before: number | null
          advisors_rows_after: number | null
          advisors_rows_before: number | null
          client_accounts_rows_after: number | null
          client_accounts_rows_before: number | null
          error_message: string | null
          id: string
          products_rows_after: number | null
          products_rows_before: number | null
          raw_luma_data_rows_after: number | null
          raw_luma_data_rows_before: number | null
          status: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          account_products_rows_after?: number | null
          account_products_rows_before?: number | null
          advisors_rows_after?: number | null
          advisors_rows_before?: number | null
          client_accounts_rows_after?: number | null
          client_accounts_rows_before?: number | null
          error_message?: string | null
          id?: string
          products_rows_after?: number | null
          products_rows_before?: number | null
          raw_luma_data_rows_after?: number | null
          raw_luma_data_rows_before?: number | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          account_products_rows_after?: number | null
          account_products_rows_before?: number | null
          advisors_rows_after?: number | null
          advisors_rows_before?: number | null
          client_accounts_rows_after?: number | null
          client_accounts_rows_before?: number | null
          error_message?: string | null
          id?: string
          products_rows_after?: number | null
          products_rows_before?: number | null
          raw_luma_data_rows_after?: number | null
          raw_luma_data_rows_before?: number | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "data_update_logs_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      household_accounts: {
        Row: {
          account_id: string
          created_at: string | null
          household_id: string
        }
        Insert: {
          account_id: string
          created_at?: string | null
          household_id: string
        }
        Update: {
          account_id?: string
          created_at?: string | null
          household_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_account"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "client_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_household"
            columns: ["household_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["id"]
          },
        ]
      }
      households: {
        Row: {
          advisor_id: string
          created_at: string | null
          id: string
          is_active: boolean | null
          name: string
          updated_at: string | null
        }
        Insert: {
          advisor_id: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          updated_at?: string | null
        }
        Update: {
          advisor_id?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_advisor"
            columns: ["advisor_id"]
            isOneToOne: false
            referencedRelation: "advisors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "households_advisor_id_fkey"
            columns: ["advisor_id"]
            isOneToOne: false
            referencedRelation: "advisors"
            referencedColumns: ["id"]
          },
        ]
      }
      note_classifications: {
        Row: {
          created_at: string | null
          cusip: string
          id: string
          note_type: string
        }
        Insert: {
          created_at?: string | null
          cusip: string
          id?: string
          note_type: string
        }
        Update: {
          created_at?: string | null
          cusip?: string
          id?: string
          note_type?: string
        }
        Relationships: []
      }
      portfolio_exposures: {
        Row: {
          bank_exposure: number | null
          calculated_at: string | null
          client_account_id: string | null
          etf_exposure: number | null
          id: string
          issuer_exposure: number | null
          issuer_exposures: Json | null
          leverage_exposure: number | null
          max_single_stock_exposure: number | null
          sector_exposure: Json | null
          single_stock_exposures: Json | null
          stock_exposure: number | null
          total_allocation: number | null
          underlier_exposures: Json | null
        }
        Insert: {
          bank_exposure?: number | null
          calculated_at?: string | null
          client_account_id?: string | null
          etf_exposure?: number | null
          id?: string
          issuer_exposure?: number | null
          issuer_exposures?: Json | null
          leverage_exposure?: number | null
          max_single_stock_exposure?: number | null
          sector_exposure?: Json | null
          single_stock_exposures?: Json | null
          stock_exposure?: number | null
          total_allocation?: number | null
          underlier_exposures?: Json | null
        }
        Update: {
          bank_exposure?: number | null
          calculated_at?: string | null
          client_account_id?: string | null
          etf_exposure?: number | null
          id?: string
          issuer_exposure?: number | null
          issuer_exposures?: Json | null
          leverage_exposure?: number | null
          max_single_stock_exposure?: number | null
          sector_exposure?: Json | null
          single_stock_exposures?: Json | null
          stock_exposure?: number | null
          total_allocation?: number | null
          underlier_exposures?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "portfolio_exposures_client_account_id_fkey"
            columns: ["client_account_id"]
            isOneToOne: true
            referencedRelation: "client_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      portfolio_exposures_backup: {
        Row: {
          bank_exposure: number | null
          calculated_at: string | null
          client_account_id: string | null
          etf_exposure: number | null
          id: string | null
          issuer_exposure: number | null
          issuer_exposures: Json | null
          leverage_exposure: number | null
          max_single_stock_exposure: number | null
          sector_exposure: Json | null
          single_stock_exposures: Json | null
          stock_exposure: number | null
          total_allocation: number | null
          underlier_exposures: Json | null
        }
        Insert: {
          bank_exposure?: number | null
          calculated_at?: string | null
          client_account_id?: string | null
          etf_exposure?: number | null
          id?: string | null
          issuer_exposure?: number | null
          issuer_exposures?: Json | null
          leverage_exposure?: number | null
          max_single_stock_exposure?: number | null
          sector_exposure?: Json | null
          single_stock_exposures?: Json | null
          stock_exposure?: number | null
          total_allocation?: number | null
          underlier_exposures?: Json | null
        }
        Update: {
          bank_exposure?: number | null
          calculated_at?: string | null
          client_account_id?: string | null
          etf_exposure?: number | null
          id?: string | null
          issuer_exposure?: number | null
          issuer_exposures?: Json | null
          leverage_exposure?: number | null
          max_single_stock_exposure?: number | null
          sector_exposure?: Json | null
          single_stock_exposures?: Json | null
          stock_exposure?: number | null
          total_allocation?: number | null
          underlier_exposures?: Json | null
        }
        Relationships: []
      }
      product_events: {
        Row: {
          client_account_id: string | null
          created_at: string | null
          cusip: string
          event_date: string
          event_type: string
          id: string
          notional_value: number
          removed_from_portfolio: boolean | null
          updated_at: string | null
        }
        Insert: {
          client_account_id?: string | null
          created_at?: string | null
          cusip: string
          event_date: string
          event_type: string
          id?: string
          notional_value: number
          removed_from_portfolio?: boolean | null
          updated_at?: string | null
        }
        Update: {
          client_account_id?: string | null
          created_at?: string | null
          cusip?: string
          event_date?: string
          event_type?: string
          id?: string
          notional_value?: number
          removed_from_portfolio?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_events_client_account_id_fkey"
            columns: ["client_account_id"]
            isOneToOne: false
            referencedRelation: "client_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_events_cusip_fkey"
            columns: ["cusip"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["cusip"]
          },
        ]
      }
      product_events_backup: {
        Row: {
          account_product_id: string | null
          client_account_id: string | null
          created_at: string | null
          cusip: string | null
          event_date: string | null
          event_type: string | null
          id: string | null
          notional_value: number | null
          removed_from_portfolio: boolean | null
          updated_at: string | null
        }
        Insert: {
          account_product_id?: string | null
          client_account_id?: string | null
          created_at?: string | null
          cusip?: string | null
          event_date?: string | null
          event_type?: string | null
          id?: string | null
          notional_value?: number | null
          removed_from_portfolio?: boolean | null
          updated_at?: string | null
        }
        Update: {
          account_product_id?: string | null
          client_account_id?: string | null
          created_at?: string | null
          cusip?: string | null
          event_date?: string | null
          event_type?: string | null
          id?: string | null
          notional_value?: number | null
          removed_from_portfolio?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      product_underliers: {
        Row: {
          created_at: string | null
          deactivated_at: string | null
          id: string
          is_active: boolean | null
          last_seen_in_upload: string | null
          product_id: string | null
          underlier: string
          updated_at: string | null
          weight: number | null
        }
        Insert: {
          created_at?: string | null
          deactivated_at?: string | null
          id?: string
          is_active?: boolean | null
          last_seen_in_upload?: string | null
          product_id?: string | null
          underlier: string
          updated_at?: string | null
          weight?: number | null
        }
        Update: {
          created_at?: string | null
          deactivated_at?: string | null
          id?: string
          is_active?: boolean | null
          last_seen_in_upload?: string | null
          product_id?: string | null
          underlier?: string
          updated_at?: string | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_underliers_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      product_underliers_backup: {
        Row: {
          created_at: string | null
          id: string | null
          product_id: string | null
          underlier: string | null
          updated_at: string | null
          weight: number | null
        }
        Insert: {
          created_at?: string | null
          id?: string | null
          product_id?: string | null
          underlier?: string | null
          updated_at?: string | null
          weight?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string | null
          product_id?: string | null
          underlier?: string | null
          updated_at?: string | null
          weight?: number | null
        }
        Relationships: []
      }
      products: {
        Row: {
          basket_performance: number | null
          basket_type: string | null
          call_barrier_observation_freq: string | null
          call_confirmation_date: string | null
          call_observation_freq: string | null
          call_status: string | null
          call_type: string | null
          cap_percentage: number | null
          cap_status: string | null
          client: string | null
          coupon_barrier_observation_freq: string | null
          coupon_observation_freq: string | null
          coupon_rate_per_annum: number | null
          coupon_type: string | null
          created_at: string | null
          cusip: string
          deactivated_at: string | null
          digital_barrier: number | null
          downside_participation_rate: number | null
          downside_type: string | null
          end_date: string | null
          expected_maturity: string | null
          first_call_date: string | null
          fixing_type: string | null
          growth_type: string | null
          id: string
          intrinsic_value: number | null
          is_active: boolean | null
          is_income_note: boolean | null
          isin: string | null
          issue_date: string | null
          issuer: string | null
          issuer_abbr: string | null
          issuing_currency: string | null
          last_seen_in_upload: string | null
          leverage_percentage: number | null
          maturity_date: string | null
          max_return: number | null
          mtm_price: number | null
          num_no_call_periods: number | null
          participation_rate: number | null
          payment_barrier: number | null
          payment_frequency: string | null
          payment_memory: boolean | null
          payment_type: string | null
          performance_as_of: string | null
          product_type: string | null
          protection_level: number | null
          put_observation_freq: string | null
          range_accrual: string | null
          registration_type: string | null
          return_type: string | null
          settlement_type: string | null
          stage: string | null
          status: string | null
          strike_type: string | null
          structure_name: string | null
          structure_type: string | null
          total_payments_received_amount: number | null
          total_payments_received_count: number | null
          trade_date: string | null
          upcoming_call_barrier: number | null
          upcoming_call_date: string | null
          updated_at: string | null
          upside_participation_rate: number | null
          valuation_date: string | null
        }
        Insert: {
          basket_performance?: number | null
          basket_type?: string | null
          call_barrier_observation_freq?: string | null
          call_confirmation_date?: string | null
          call_observation_freq?: string | null
          call_status?: string | null
          call_type?: string | null
          cap_percentage?: number | null
          cap_status?: string | null
          client?: string | null
          coupon_barrier_observation_freq?: string | null
          coupon_observation_freq?: string | null
          coupon_rate_per_annum?: number | null
          coupon_type?: string | null
          created_at?: string | null
          cusip: string
          deactivated_at?: string | null
          digital_barrier?: number | null
          downside_participation_rate?: number | null
          downside_type?: string | null
          end_date?: string | null
          expected_maturity?: string | null
          first_call_date?: string | null
          fixing_type?: string | null
          growth_type?: string | null
          id?: string
          intrinsic_value?: number | null
          is_active?: boolean | null
          is_income_note?: boolean | null
          isin?: string | null
          issue_date?: string | null
          issuer?: string | null
          issuer_abbr?: string | null
          issuing_currency?: string | null
          last_seen_in_upload?: string | null
          leverage_percentage?: number | null
          maturity_date?: string | null
          max_return?: number | null
          mtm_price?: number | null
          num_no_call_periods?: number | null
          participation_rate?: number | null
          payment_barrier?: number | null
          payment_frequency?: string | null
          payment_memory?: boolean | null
          payment_type?: string | null
          performance_as_of?: string | null
          product_type?: string | null
          protection_level?: number | null
          put_observation_freq?: string | null
          range_accrual?: string | null
          registration_type?: string | null
          return_type?: string | null
          settlement_type?: string | null
          stage?: string | null
          status?: string | null
          strike_type?: string | null
          structure_name?: string | null
          structure_type?: string | null
          total_payments_received_amount?: number | null
          total_payments_received_count?: number | null
          trade_date?: string | null
          upcoming_call_barrier?: number | null
          upcoming_call_date?: string | null
          updated_at?: string | null
          upside_participation_rate?: number | null
          valuation_date?: string | null
        }
        Update: {
          basket_performance?: number | null
          basket_type?: string | null
          call_barrier_observation_freq?: string | null
          call_confirmation_date?: string | null
          call_observation_freq?: string | null
          call_status?: string | null
          call_type?: string | null
          cap_percentage?: number | null
          cap_status?: string | null
          client?: string | null
          coupon_barrier_observation_freq?: string | null
          coupon_observation_freq?: string | null
          coupon_rate_per_annum?: number | null
          coupon_type?: string | null
          created_at?: string | null
          cusip?: string
          deactivated_at?: string | null
          digital_barrier?: number | null
          downside_participation_rate?: number | null
          downside_type?: string | null
          end_date?: string | null
          expected_maturity?: string | null
          first_call_date?: string | null
          fixing_type?: string | null
          growth_type?: string | null
          id?: string
          intrinsic_value?: number | null
          is_active?: boolean | null
          is_income_note?: boolean | null
          isin?: string | null
          issue_date?: string | null
          issuer?: string | null
          issuer_abbr?: string | null
          issuing_currency?: string | null
          last_seen_in_upload?: string | null
          leverage_percentage?: number | null
          maturity_date?: string | null
          max_return?: number | null
          mtm_price?: number | null
          num_no_call_periods?: number | null
          participation_rate?: number | null
          payment_barrier?: number | null
          payment_frequency?: string | null
          payment_memory?: boolean | null
          payment_type?: string | null
          performance_as_of?: string | null
          product_type?: string | null
          protection_level?: number | null
          put_observation_freq?: string | null
          range_accrual?: string | null
          registration_type?: string | null
          return_type?: string | null
          settlement_type?: string | null
          stage?: string | null
          status?: string | null
          strike_type?: string | null
          structure_name?: string | null
          structure_type?: string | null
          total_payments_received_amount?: number | null
          total_payments_received_count?: number | null
          trade_date?: string | null
          upcoming_call_barrier?: number | null
          upcoming_call_date?: string | null
          updated_at?: string | null
          upside_participation_rate?: number | null
          valuation_date?: string | null
        }
        Relationships: []
      }
      products_backup: {
        Row: {
          basket_performance: number | null
          basket_type: string | null
          call_confirmation_date: string | null
          call_status: string | null
          call_type: string | null
          cap_status: string | null
          client: string | null
          coupon_rate_per_annum: number | null
          created_at: string | null
          cusip: string | null
          downside_type: string | null
          end_date: string | null
          expected_maturity: string | null
          growth_type: string | null
          id: string | null
          isin: string | null
          issue_date: string | null
          issuer: string | null
          maturity_date: string | null
          max_return: number | null
          participation_rate: number | null
          payment_barrier: number | null
          payment_frequency: string | null
          payment_memory: boolean | null
          payment_type: string | null
          performance_as_of: string | null
          protection_level: number | null
          return_type: string | null
          stage: string | null
          status: string | null
          structure_name: string | null
          trade_date: string | null
          upcoming_call_barrier: number | null
          upcoming_call_date: string | null
          updated_at: string | null
          valuation_date: string | null
        }
        Insert: {
          basket_performance?: number | null
          basket_type?: string | null
          call_confirmation_date?: string | null
          call_status?: string | null
          call_type?: string | null
          cap_status?: string | null
          client?: string | null
          coupon_rate_per_annum?: number | null
          created_at?: string | null
          cusip?: string | null
          downside_type?: string | null
          end_date?: string | null
          expected_maturity?: string | null
          growth_type?: string | null
          id?: string | null
          isin?: string | null
          issue_date?: string | null
          issuer?: string | null
          maturity_date?: string | null
          max_return?: number | null
          participation_rate?: number | null
          payment_barrier?: number | null
          payment_frequency?: string | null
          payment_memory?: boolean | null
          payment_type?: string | null
          performance_as_of?: string | null
          protection_level?: number | null
          return_type?: string | null
          stage?: string | null
          status?: string | null
          structure_name?: string | null
          trade_date?: string | null
          upcoming_call_barrier?: number | null
          upcoming_call_date?: string | null
          updated_at?: string | null
          valuation_date?: string | null
        }
        Update: {
          basket_performance?: number | null
          basket_type?: string | null
          call_confirmation_date?: string | null
          call_status?: string | null
          call_type?: string | null
          cap_status?: string | null
          client?: string | null
          coupon_rate_per_annum?: number | null
          created_at?: string | null
          cusip?: string | null
          downside_type?: string | null
          end_date?: string | null
          expected_maturity?: string | null
          growth_type?: string | null
          id?: string | null
          isin?: string | null
          issue_date?: string | null
          issuer?: string | null
          maturity_date?: string | null
          max_return?: number | null
          participation_rate?: number | null
          payment_barrier?: number | null
          payment_frequency?: string | null
          payment_memory?: boolean | null
          payment_type?: string | null
          performance_as_of?: string | null
          protection_level?: number | null
          return_type?: string | null
          stage?: string | null
          status?: string | null
          structure_name?: string | null
          trade_date?: string | null
          upcoming_call_barrier?: number | null
          upcoming_call_date?: string | null
          updated_at?: string | null
          valuation_date?: string | null
        }
        Relationships: []
      }
      raw_luma_data: {
        Row: {
          "Account Id": string | null
          "Active Underlier": string | null
          "Active Underlier Strike Level (USD)": string | null
          Advisor: string | null
          "Basket Type": string | null
          "Call Barrier": string | null
          "Call Barrier Observation Freq": string | null
          "Call Observation Freq": string | null
          "Cap Percentage": string | null
          "Capped/Uncapped": string | null
          "Coupon Barrier": string | null
          "Coupon Barrier Observation Freq": string | null
          "Coupon Observation Freq": string | null
          "Coupon Payment Freq": string | null
          "Coupon Rate Per Annum Percent": string | null
          "Coupon Rate Percent": string | null
          "Coupon Type": string | null
          "Current Inventory": string | null
          "Current Notional (USD)": string | null
          Cusip: string
          "Digital Barrier": string | null
          "Distance To Cap": string | null
          "Downside Participation Rate": string | null
          "Final Valuation Date": string | null
          "Fixing Type": string | null
          "Gain Loss (USD)": string | null
          "Growth Type": string | null
          id: number
          "Intrinsic Value": string | null
          "Investor Holding": string | null
          Isin: string | null
          "Issue Date": string | null
          Issuer: string | null
          "Issuer Abbr": string | null
          "Issuing Currency": string | null
          "Leverage Percentage": string | null
          "List Of Underliers": string | null
          "Mark To Market Price": string | null
          "Maturity Date": string | null
          "Max Return": string | null
          "Next Event Observation Date": string | null
          "Num No Call Periods": string | null
          "Payment Type": string | null
          "Payments Received Percent": string | null
          "Payments Remaining Percent": string | null
          "Product Type": string | null
          "Protection Level Percent": string | null
          "Protection Proximity Level Abs": string | null
          "Put Observation Freq": string | null
          "Range Accrual": string | null
          "Registration Type": string | null
          "Return Type": string | null
          "Settlement Type": string | null
          Status: string | null
          "Strike Type": string | null
          "Structure Type": string | null
          "Time to Maturity (Months)": string | null
          "Total Payments Received Amount (USD)": string | null
          "Total Payments Received Count": string | null
          "Trade Date": string | null
          "Underlier 1 Coupon Barrier Level": string | null
          "Underlier 1 Currency": string | null
          "Underlier 1 Current Price": string | null
          "Underlier 1 Current Price Date": string | null
          "Underlier 1 Is Active": string | null
          "Underlier 1 Name": string | null
          "Underlier 1 Performance": string | null
          "Underlier 1 Protection Barrier Level": string | null
          "Underlier 1 Strike Date": string | null
          "Underlier 1 Strike Price": string | null
          "Underlier 1 Symbol": string | null
          "Underlier 1 Weight": string | null
          "Underlier 10 Currency": string | null
          "Underlier 10 Current Price": string | null
          "Underlier 10 Current Price Date": string | null
          "Underlier 10 Is Active": string | null
          "Underlier 10 Name": string | null
          "Underlier 10 Performance": string | null
          "Underlier 10 Protection Barrier Level": string | null
          "Underlier 10 Strike Date": string | null
          "Underlier 10 Strike Price": string | null
          "Underlier 10 Symbol": string | null
          "Underlier 10 Weight": string | null
          "Underlier 2 Coupon Barrier Level": string | null
          "Underlier 2 Currency": string | null
          "Underlier 2 Current Price": string | null
          "Underlier 2 Current Price Date": string | null
          "Underlier 2 Is Active": string | null
          "Underlier 2 Name": string | null
          "Underlier 2 Performance": string | null
          "Underlier 2 Protection Barrier Level": string | null
          "Underlier 2 Strike Date": string | null
          "Underlier 2 Strike Price": string | null
          "Underlier 2 Symbol": string | null
          "Underlier 2 Weight": string | null
          "Underlier 3 Coupon Barrier Level": string | null
          "Underlier 3 Currency": string | null
          "Underlier 3 Current Price": string | null
          "Underlier 3 Current Price Date": string | null
          "Underlier 3 Is Active": string | null
          "Underlier 3 Name": string | null
          "Underlier 3 Performance": string | null
          "Underlier 3 Protection Barrier Level": string | null
          "Underlier 3 Strike Date": string | null
          "Underlier 3 Strike Price": string | null
          "Underlier 3 Symbol": string | null
          "Underlier 3 Weight": string | null
          "Underlier 4 Coupon Barrier Level": string | null
          "Underlier 4 Currency": string | null
          "Underlier 4 Current Price": string | null
          "Underlier 4 Current Price Date": string | null
          "Underlier 4 Is Active": string | null
          "Underlier 4 Name": string | null
          "Underlier 4 Performance": string | null
          "Underlier 4 Protection Barrier Level": string | null
          "Underlier 4 Strike Date": string | null
          "Underlier 4 Strike Price": string | null
          "Underlier 4 Symbol": string | null
          "Underlier 4 Weight": string | null
          "Underlier 5 Coupon Barrier Level": string | null
          "Underlier 5 Currency": string | null
          "Underlier 5 Current Price": string | null
          "Underlier 5 Current Price Date": string | null
          "Underlier 5 Is Active": string | null
          "Underlier 5 Name": string | null
          "Underlier 5 Performance": string | null
          "Underlier 5 Protection Barrier Level": string | null
          "Underlier 5 Strike Date": string | null
          "Underlier 5 Strike Price": string | null
          "Underlier 5 Symbol": string | null
          "Underlier 5 Weight": string | null
          "Underlier 6 Currency": string | null
          "Underlier 6 Current Price": string | null
          "Underlier 6 Current Price Date": string | null
          "Underlier 6 Is Active": string | null
          "Underlier 6 Name": string | null
          "Underlier 6 Performance": string | null
          "Underlier 6 Protection Barrier Level": string | null
          "Underlier 6 Strike Date": string | null
          "Underlier 6 Strike Price": string | null
          "Underlier 6 Symbol": string | null
          "Underlier 6 Weight": string | null
          "Underlier 7 Currency": string | null
          "Underlier 7 Current Price": string | null
          "Underlier 7 Current Price Date": string | null
          "Underlier 7 Is Active": string | null
          "Underlier 7 Name": string | null
          "Underlier 7 Performance": string | null
          "Underlier 7 Protection Barrier Level": string | null
          "Underlier 7 Strike Date": string | null
          "Underlier 7 Strike Price": string | null
          "Underlier 7 Symbol": string | null
          "Underlier 7 Weight": string | null
          "Underlier 8 Currency": string | null
          "Underlier 8 Current Price": string | null
          "Underlier 8 Current Price Date": string | null
          "Underlier 8 Is Active": string | null
          "Underlier 8 Name": string | null
          "Underlier 8 Performance": string | null
          "Underlier 8 Protection Barrier Level": string | null
          "Underlier 8 Strike Date": string | null
          "Underlier 8 Strike Price": string | null
          "Underlier 8 Symbol": string | null
          "Underlier 8 Weight": string | null
          "Underlier 9 Currency": string | null
          "Underlier 9 Current Price": string | null
          "Underlier 9 Current Price Date": string | null
          "Underlier 9 Is Active": string | null
          "Underlier 9 Name": string | null
          "Underlier 9 Performance": string | null
          "Underlier 9 Protection Barrier Level": string | null
          "Underlier 9 Strike Date": string | null
          "Underlier 9 Strike Price": string | null
          "Underlier 9 Symbol": string | null
          "Underlier 9 Weight": string | null
          "Underlier Class": string | null
          "Underlier Performance Percent": string | null
          "Upside Participation Rate": string | null
        }
        Insert: {
          "Account Id"?: string | null
          "Active Underlier"?: string | null
          "Active Underlier Strike Level (USD)"?: string | null
          Advisor?: string | null
          "Basket Type"?: string | null
          "Call Barrier"?: string | null
          "Call Barrier Observation Freq"?: string | null
          "Call Observation Freq"?: string | null
          "Cap Percentage"?: string | null
          "Capped/Uncapped"?: string | null
          "Coupon Barrier"?: string | null
          "Coupon Barrier Observation Freq"?: string | null
          "Coupon Observation Freq"?: string | null
          "Coupon Payment Freq"?: string | null
          "Coupon Rate Per Annum Percent"?: string | null
          "Coupon Rate Percent"?: string | null
          "Coupon Type"?: string | null
          "Current Inventory"?: string | null
          "Current Notional (USD)"?: string | null
          Cusip: string
          "Digital Barrier"?: string | null
          "Distance To Cap"?: string | null
          "Downside Participation Rate"?: string | null
          "Final Valuation Date"?: string | null
          "Fixing Type"?: string | null
          "Gain Loss (USD)"?: string | null
          "Growth Type"?: string | null
          id?: number
          "Intrinsic Value"?: string | null
          "Investor Holding"?: string | null
          Isin?: string | null
          "Issue Date"?: string | null
          Issuer?: string | null
          "Issuer Abbr"?: string | null
          "Issuing Currency"?: string | null
          "Leverage Percentage"?: string | null
          "List Of Underliers"?: string | null
          "Mark To Market Price"?: string | null
          "Maturity Date"?: string | null
          "Max Return"?: string | null
          "Next Event Observation Date"?: string | null
          "Num No Call Periods"?: string | null
          "Payment Type"?: string | null
          "Payments Received Percent"?: string | null
          "Payments Remaining Percent"?: string | null
          "Product Type"?: string | null
          "Protection Level Percent"?: string | null
          "Protection Proximity Level Abs"?: string | null
          "Put Observation Freq"?: string | null
          "Range Accrual"?: string | null
          "Registration Type"?: string | null
          "Return Type"?: string | null
          "Settlement Type"?: string | null
          Status?: string | null
          "Strike Type"?: string | null
          "Structure Type"?: string | null
          "Time to Maturity (Months)"?: string | null
          "Total Payments Received Amount (USD)"?: string | null
          "Total Payments Received Count"?: string | null
          "Trade Date"?: string | null
          "Underlier 1 Coupon Barrier Level"?: string | null
          "Underlier 1 Currency"?: string | null
          "Underlier 1 Current Price"?: string | null
          "Underlier 1 Current Price Date"?: string | null
          "Underlier 1 Is Active"?: string | null
          "Underlier 1 Name"?: string | null
          "Underlier 1 Performance"?: string | null
          "Underlier 1 Protection Barrier Level"?: string | null
          "Underlier 1 Strike Date"?: string | null
          "Underlier 1 Strike Price"?: string | null
          "Underlier 1 Symbol"?: string | null
          "Underlier 1 Weight"?: string | null
          "Underlier 10 Currency"?: string | null
          "Underlier 10 Current Price"?: string | null
          "Underlier 10 Current Price Date"?: string | null
          "Underlier 10 Is Active"?: string | null
          "Underlier 10 Name"?: string | null
          "Underlier 10 Performance"?: string | null
          "Underlier 10 Protection Barrier Level"?: string | null
          "Underlier 10 Strike Date"?: string | null
          "Underlier 10 Strike Price"?: string | null
          "Underlier 10 Symbol"?: string | null
          "Underlier 10 Weight"?: string | null
          "Underlier 2 Coupon Barrier Level"?: string | null
          "Underlier 2 Currency"?: string | null
          "Underlier 2 Current Price"?: string | null
          "Underlier 2 Current Price Date"?: string | null
          "Underlier 2 Is Active"?: string | null
          "Underlier 2 Name"?: string | null
          "Underlier 2 Performance"?: string | null
          "Underlier 2 Protection Barrier Level"?: string | null
          "Underlier 2 Strike Date"?: string | null
          "Underlier 2 Strike Price"?: string | null
          "Underlier 2 Symbol"?: string | null
          "Underlier 2 Weight"?: string | null
          "Underlier 3 Coupon Barrier Level"?: string | null
          "Underlier 3 Currency"?: string | null
          "Underlier 3 Current Price"?: string | null
          "Underlier 3 Current Price Date"?: string | null
          "Underlier 3 Is Active"?: string | null
          "Underlier 3 Name"?: string | null
          "Underlier 3 Performance"?: string | null
          "Underlier 3 Protection Barrier Level"?: string | null
          "Underlier 3 Strike Date"?: string | null
          "Underlier 3 Strike Price"?: string | null
          "Underlier 3 Symbol"?: string | null
          "Underlier 3 Weight"?: string | null
          "Underlier 4 Coupon Barrier Level"?: string | null
          "Underlier 4 Currency"?: string | null
          "Underlier 4 Current Price"?: string | null
          "Underlier 4 Current Price Date"?: string | null
          "Underlier 4 Is Active"?: string | null
          "Underlier 4 Name"?: string | null
          "Underlier 4 Performance"?: string | null
          "Underlier 4 Protection Barrier Level"?: string | null
          "Underlier 4 Strike Date"?: string | null
          "Underlier 4 Strike Price"?: string | null
          "Underlier 4 Symbol"?: string | null
          "Underlier 4 Weight"?: string | null
          "Underlier 5 Coupon Barrier Level"?: string | null
          "Underlier 5 Currency"?: string | null
          "Underlier 5 Current Price"?: string | null
          "Underlier 5 Current Price Date"?: string | null
          "Underlier 5 Is Active"?: string | null
          "Underlier 5 Name"?: string | null
          "Underlier 5 Performance"?: string | null
          "Underlier 5 Protection Barrier Level"?: string | null
          "Underlier 5 Strike Date"?: string | null
          "Underlier 5 Strike Price"?: string | null
          "Underlier 5 Symbol"?: string | null
          "Underlier 5 Weight"?: string | null
          "Underlier 6 Currency"?: string | null
          "Underlier 6 Current Price"?: string | null
          "Underlier 6 Current Price Date"?: string | null
          "Underlier 6 Is Active"?: string | null
          "Underlier 6 Name"?: string | null
          "Underlier 6 Performance"?: string | null
          "Underlier 6 Protection Barrier Level"?: string | null
          "Underlier 6 Strike Date"?: string | null
          "Underlier 6 Strike Price"?: string | null
          "Underlier 6 Symbol"?: string | null
          "Underlier 6 Weight"?: string | null
          "Underlier 7 Currency"?: string | null
          "Underlier 7 Current Price"?: string | null
          "Underlier 7 Current Price Date"?: string | null
          "Underlier 7 Is Active"?: string | null
          "Underlier 7 Name"?: string | null
          "Underlier 7 Performance"?: string | null
          "Underlier 7 Protection Barrier Level"?: string | null
          "Underlier 7 Strike Date"?: string | null
          "Underlier 7 Strike Price"?: string | null
          "Underlier 7 Symbol"?: string | null
          "Underlier 7 Weight"?: string | null
          "Underlier 8 Currency"?: string | null
          "Underlier 8 Current Price"?: string | null
          "Underlier 8 Current Price Date"?: string | null
          "Underlier 8 Is Active"?: string | null
          "Underlier 8 Name"?: string | null
          "Underlier 8 Performance"?: string | null
          "Underlier 8 Protection Barrier Level"?: string | null
          "Underlier 8 Strike Date"?: string | null
          "Underlier 8 Strike Price"?: string | null
          "Underlier 8 Symbol"?: string | null
          "Underlier 8 Weight"?: string | null
          "Underlier 9 Currency"?: string | null
          "Underlier 9 Current Price"?: string | null
          "Underlier 9 Current Price Date"?: string | null
          "Underlier 9 Is Active"?: string | null
          "Underlier 9 Name"?: string | null
          "Underlier 9 Performance"?: string | null
          "Underlier 9 Protection Barrier Level"?: string | null
          "Underlier 9 Strike Date"?: string | null
          "Underlier 9 Strike Price"?: string | null
          "Underlier 9 Symbol"?: string | null
          "Underlier 9 Weight"?: string | null
          "Underlier Class"?: string | null
          "Underlier Performance Percent"?: string | null
          "Upside Participation Rate"?: string | null
        }
        Update: {
          "Account Id"?: string | null
          "Active Underlier"?: string | null
          "Active Underlier Strike Level (USD)"?: string | null
          Advisor?: string | null
          "Basket Type"?: string | null
          "Call Barrier"?: string | null
          "Call Barrier Observation Freq"?: string | null
          "Call Observation Freq"?: string | null
          "Cap Percentage"?: string | null
          "Capped/Uncapped"?: string | null
          "Coupon Barrier"?: string | null
          "Coupon Barrier Observation Freq"?: string | null
          "Coupon Observation Freq"?: string | null
          "Coupon Payment Freq"?: string | null
          "Coupon Rate Per Annum Percent"?: string | null
          "Coupon Rate Percent"?: string | null
          "Coupon Type"?: string | null
          "Current Inventory"?: string | null
          "Current Notional (USD)"?: string | null
          Cusip?: string
          "Digital Barrier"?: string | null
          "Distance To Cap"?: string | null
          "Downside Participation Rate"?: string | null
          "Final Valuation Date"?: string | null
          "Fixing Type"?: string | null
          "Gain Loss (USD)"?: string | null
          "Growth Type"?: string | null
          id?: number
          "Intrinsic Value"?: string | null
          "Investor Holding"?: string | null
          Isin?: string | null
          "Issue Date"?: string | null
          Issuer?: string | null
          "Issuer Abbr"?: string | null
          "Issuing Currency"?: string | null
          "Leverage Percentage"?: string | null
          "List Of Underliers"?: string | null
          "Mark To Market Price"?: string | null
          "Maturity Date"?: string | null
          "Max Return"?: string | null
          "Next Event Observation Date"?: string | null
          "Num No Call Periods"?: string | null
          "Payment Type"?: string | null
          "Payments Received Percent"?: string | null
          "Payments Remaining Percent"?: string | null
          "Product Type"?: string | null
          "Protection Level Percent"?: string | null
          "Protection Proximity Level Abs"?: string | null
          "Put Observation Freq"?: string | null
          "Range Accrual"?: string | null
          "Registration Type"?: string | null
          "Return Type"?: string | null
          "Settlement Type"?: string | null
          Status?: string | null
          "Strike Type"?: string | null
          "Structure Type"?: string | null
          "Time to Maturity (Months)"?: string | null
          "Total Payments Received Amount (USD)"?: string | null
          "Total Payments Received Count"?: string | null
          "Trade Date"?: string | null
          "Underlier 1 Coupon Barrier Level"?: string | null
          "Underlier 1 Currency"?: string | null
          "Underlier 1 Current Price"?: string | null
          "Underlier 1 Current Price Date"?: string | null
          "Underlier 1 Is Active"?: string | null
          "Underlier 1 Name"?: string | null
          "Underlier 1 Performance"?: string | null
          "Underlier 1 Protection Barrier Level"?: string | null
          "Underlier 1 Strike Date"?: string | null
          "Underlier 1 Strike Price"?: string | null
          "Underlier 1 Symbol"?: string | null
          "Underlier 1 Weight"?: string | null
          "Underlier 10 Currency"?: string | null
          "Underlier 10 Current Price"?: string | null
          "Underlier 10 Current Price Date"?: string | null
          "Underlier 10 Is Active"?: string | null
          "Underlier 10 Name"?: string | null
          "Underlier 10 Performance"?: string | null
          "Underlier 10 Protection Barrier Level"?: string | null
          "Underlier 10 Strike Date"?: string | null
          "Underlier 10 Strike Price"?: string | null
          "Underlier 10 Symbol"?: string | null
          "Underlier 10 Weight"?: string | null
          "Underlier 2 Coupon Barrier Level"?: string | null
          "Underlier 2 Currency"?: string | null
          "Underlier 2 Current Price"?: string | null
          "Underlier 2 Current Price Date"?: string | null
          "Underlier 2 Is Active"?: string | null
          "Underlier 2 Name"?: string | null
          "Underlier 2 Performance"?: string | null
          "Underlier 2 Protection Barrier Level"?: string | null
          "Underlier 2 Strike Date"?: string | null
          "Underlier 2 Strike Price"?: string | null
          "Underlier 2 Symbol"?: string | null
          "Underlier 2 Weight"?: string | null
          "Underlier 3 Coupon Barrier Level"?: string | null
          "Underlier 3 Currency"?: string | null
          "Underlier 3 Current Price"?: string | null
          "Underlier 3 Current Price Date"?: string | null
          "Underlier 3 Is Active"?: string | null
          "Underlier 3 Name"?: string | null
          "Underlier 3 Performance"?: string | null
          "Underlier 3 Protection Barrier Level"?: string | null
          "Underlier 3 Strike Date"?: string | null
          "Underlier 3 Strike Price"?: string | null
          "Underlier 3 Symbol"?: string | null
          "Underlier 3 Weight"?: string | null
          "Underlier 4 Coupon Barrier Level"?: string | null
          "Underlier 4 Currency"?: string | null
          "Underlier 4 Current Price"?: string | null
          "Underlier 4 Current Price Date"?: string | null
          "Underlier 4 Is Active"?: string | null
          "Underlier 4 Name"?: string | null
          "Underlier 4 Performance"?: string | null
          "Underlier 4 Protection Barrier Level"?: string | null
          "Underlier 4 Strike Date"?: string | null
          "Underlier 4 Strike Price"?: string | null
          "Underlier 4 Symbol"?: string | null
          "Underlier 4 Weight"?: string | null
          "Underlier 5 Coupon Barrier Level"?: string | null
          "Underlier 5 Currency"?: string | null
          "Underlier 5 Current Price"?: string | null
          "Underlier 5 Current Price Date"?: string | null
          "Underlier 5 Is Active"?: string | null
          "Underlier 5 Name"?: string | null
          "Underlier 5 Performance"?: string | null
          "Underlier 5 Protection Barrier Level"?: string | null
          "Underlier 5 Strike Date"?: string | null
          "Underlier 5 Strike Price"?: string | null
          "Underlier 5 Symbol"?: string | null
          "Underlier 5 Weight"?: string | null
          "Underlier 6 Currency"?: string | null
          "Underlier 6 Current Price"?: string | null
          "Underlier 6 Current Price Date"?: string | null
          "Underlier 6 Is Active"?: string | null
          "Underlier 6 Name"?: string | null
          "Underlier 6 Performance"?: string | null
          "Underlier 6 Protection Barrier Level"?: string | null
          "Underlier 6 Strike Date"?: string | null
          "Underlier 6 Strike Price"?: string | null
          "Underlier 6 Symbol"?: string | null
          "Underlier 6 Weight"?: string | null
          "Underlier 7 Currency"?: string | null
          "Underlier 7 Current Price"?: string | null
          "Underlier 7 Current Price Date"?: string | null
          "Underlier 7 Is Active"?: string | null
          "Underlier 7 Name"?: string | null
          "Underlier 7 Performance"?: string | null
          "Underlier 7 Protection Barrier Level"?: string | null
          "Underlier 7 Strike Date"?: string | null
          "Underlier 7 Strike Price"?: string | null
          "Underlier 7 Symbol"?: string | null
          "Underlier 7 Weight"?: string | null
          "Underlier 8 Currency"?: string | null
          "Underlier 8 Current Price"?: string | null
          "Underlier 8 Current Price Date"?: string | null
          "Underlier 8 Is Active"?: string | null
          "Underlier 8 Name"?: string | null
          "Underlier 8 Performance"?: string | null
          "Underlier 8 Protection Barrier Level"?: string | null
          "Underlier 8 Strike Date"?: string | null
          "Underlier 8 Strike Price"?: string | null
          "Underlier 8 Symbol"?: string | null
          "Underlier 8 Weight"?: string | null
          "Underlier 9 Currency"?: string | null
          "Underlier 9 Current Price"?: string | null
          "Underlier 9 Current Price Date"?: string | null
          "Underlier 9 Is Active"?: string | null
          "Underlier 9 Name"?: string | null
          "Underlier 9 Performance"?: string | null
          "Underlier 9 Protection Barrier Level"?: string | null
          "Underlier 9 Strike Date"?: string | null
          "Underlier 9 Strike Price"?: string | null
          "Underlier 9 Symbol"?: string | null
          "Underlier 9 Weight"?: string | null
          "Underlier Class"?: string | null
          "Underlier Performance Percent"?: string | null
          "Upside Participation Rate"?: string | null
        }
        Relationships: []
      }
      raw_luma_data_backup: {
        Row: {
          "Account Id": string | null
          "Active Underlier": string | null
          "Active Underlier Strike Level (USD)": string | null
          Advisor: string | null
          "Basket Type": string | null
          "Call Barrier": string | null
          "Call Barrier Observation Freq": string | null
          "Call Observation Freq": string | null
          "Cap Percentage": string | null
          "Capped/Uncapped": string | null
          "Coupon Barrier": string | null
          "Coupon Barrier Observation Freq": string | null
          "Coupon Observation Freq": string | null
          "Coupon Payment Freq": string | null
          "Coupon Rate Per Annum Percent": string | null
          "Coupon Rate Percent": string | null
          "Coupon Type": string | null
          "Current Inventory": string | null
          "Current Notional (USD)": string | null
          Cusip: string | null
          "Digital Barrier": string | null
          "Distance To Cap": string | null
          "Downside Participation Rate": string | null
          "Final Valuation Date": string | null
          "Fixing Type": string | null
          "Gain Loss (USD)": string | null
          "Growth Type": string | null
          id: number | null
          "Intrinsic Value": string | null
          "Investor Holding": string | null
          Isin: string | null
          "Issue Date": string | null
          Issuer: string | null
          "Issuer Abbr": string | null
          "Issuing Currency": string | null
          "Leverage Percentage": string | null
          "List Of Underliers": string | null
          "Mark To Market Price": string | null
          "Maturity Date": string | null
          "Max Return": string | null
          "Next Event Observation Date": string | null
          "Num No Call Periods": string | null
          "Payment Type": string | null
          "Payments Received Percent": string | null
          "Payments Remaining Percent": string | null
          "Product Type": string | null
          "Protection Level Percent": string | null
          "Protection Proximity Level Abs": string | null
          "Put Observation Freq": string | null
          "Range Accrual": string | null
          "Registration Type": string | null
          "Return Type": string | null
          "Settlement Type": string | null
          Status: string | null
          "Strike Type": string | null
          "Structure Type": string | null
          "Time to Maturity (Months)": string | null
          "Total Payments Received Amount (USD)": string | null
          "Total Payments Received Count": string | null
          "Trade Date": string | null
          "Underlier 1 Coupon Barrier Level": string | null
          "Underlier 1 Currency": string | null
          "Underlier 1 Current Price": string | null
          "Underlier 1 Current Price Date": string | null
          "Underlier 1 Is Active": string | null
          "Underlier 1 Name": string | null
          "Underlier 1 Performance": string | null
          "Underlier 1 Strike Date": string | null
          "Underlier 1 Strike Price": string | null
          "Underlier 1 Symbol": string | null
          "Underlier 1 Weight": string | null
          "Underlier 10 Currency": string | null
          "Underlier 10 Current Price": string | null
          "Underlier 10 Current Price Date": string | null
          "Underlier 10 Is Active": string | null
          "Underlier 10 Name": string | null
          "Underlier 10 Performance": string | null
          "Underlier 10 Strike Date": string | null
          "Underlier 10 Strike Price": string | null
          "Underlier 10 Symbol": string | null
          "Underlier 10 Weight": string | null
          "Underlier 2 Coupon Barrier Level": string | null
          "Underlier 2 Currency": string | null
          "Underlier 2 Current Price": string | null
          "Underlier 2 Current Price Date": string | null
          "Underlier 2 Is Active": string | null
          "Underlier 2 Name": string | null
          "Underlier 2 Performance": string | null
          "Underlier 2 Strike Date": string | null
          "Underlier 2 Strike Price": string | null
          "Underlier 2 Symbol": string | null
          "Underlier 2 Weight": string | null
          "Underlier 3 Coupon Barrier Level": string | null
          "Underlier 3 Currency": string | null
          "Underlier 3 Current Price": string | null
          "Underlier 3 Current Price Date": string | null
          "Underlier 3 Is Active": string | null
          "Underlier 3 Name": string | null
          "Underlier 3 Performance": string | null
          "Underlier 3 Strike Date": string | null
          "Underlier 3 Strike Price": string | null
          "Underlier 3 Symbol": string | null
          "Underlier 3 Weight": string | null
          "Underlier 4 Coupon Barrier Level": string | null
          "Underlier 4 Currency": string | null
          "Underlier 4 Current Price": string | null
          "Underlier 4 Current Price Date": string | null
          "Underlier 4 Is Active": string | null
          "Underlier 4 Name": string | null
          "Underlier 4 Performance": string | null
          "Underlier 4 Strike Date": string | null
          "Underlier 4 Strike Price": string | null
          "Underlier 4 Symbol": string | null
          "Underlier 4 Weight": string | null
          "Underlier 5 Coupon Barrier Level": string | null
          "Underlier 5 Currency": string | null
          "Underlier 5 Current Price": string | null
          "Underlier 5 Current Price Date": string | null
          "Underlier 5 Is Active": string | null
          "Underlier 5 Name": string | null
          "Underlier 5 Performance": string | null
          "Underlier 5 Strike Date": string | null
          "Underlier 5 Strike Price": string | null
          "Underlier 5 Symbol": string | null
          "Underlier 5 Weight": string | null
          "Underlier 6 Currency": string | null
          "Underlier 6 Current Price": string | null
          "Underlier 6 Current Price Date": string | null
          "Underlier 6 Is Active": string | null
          "Underlier 6 Name": string | null
          "Underlier 6 Performance": string | null
          "Underlier 6 Strike Date": string | null
          "Underlier 6 Strike Price": string | null
          "Underlier 6 Symbol": string | null
          "Underlier 6 Weight": string | null
          "Underlier 7 Currency": string | null
          "Underlier 7 Current Price": string | null
          "Underlier 7 Current Price Date": string | null
          "Underlier 7 Is Active": string | null
          "Underlier 7 Name": string | null
          "Underlier 7 Performance": string | null
          "Underlier 7 Strike Date": string | null
          "Underlier 7 Strike Price": string | null
          "Underlier 7 Symbol": string | null
          "Underlier 7 Weight": string | null
          "Underlier 8 Currency": string | null
          "Underlier 8 Current Price": string | null
          "Underlier 8 Current Price Date": string | null
          "Underlier 8 Is Active": string | null
          "Underlier 8 Name": string | null
          "Underlier 8 Performance": string | null
          "Underlier 8 Strike Date": string | null
          "Underlier 8 Strike Price": string | null
          "Underlier 8 Symbol": string | null
          "Underlier 8 Weight": string | null
          "Underlier 9 Currency": string | null
          "Underlier 9 Current Price": string | null
          "Underlier 9 Current Price Date": string | null
          "Underlier 9 Is Active": string | null
          "Underlier 9 Name": string | null
          "Underlier 9 Performance": string | null
          "Underlier 9 Strike Date": string | null
          "Underlier 9 Strike Price": string | null
          "Underlier 9 Symbol": string | null
          "Underlier 9 Weight": string | null
          "Underlier Class": string | null
          "Underlier Performance Percent": string | null
          "Upside Participation Rate": string | null
        }
        Insert: {
          "Account Id"?: string | null
          "Active Underlier"?: string | null
          "Active Underlier Strike Level (USD)"?: string | null
          Advisor?: string | null
          "Basket Type"?: string | null
          "Call Barrier"?: string | null
          "Call Barrier Observation Freq"?: string | null
          "Call Observation Freq"?: string | null
          "Cap Percentage"?: string | null
          "Capped/Uncapped"?: string | null
          "Coupon Barrier"?: string | null
          "Coupon Barrier Observation Freq"?: string | null
          "Coupon Observation Freq"?: string | null
          "Coupon Payment Freq"?: string | null
          "Coupon Rate Per Annum Percent"?: string | null
          "Coupon Rate Percent"?: string | null
          "Coupon Type"?: string | null
          "Current Inventory"?: string | null
          "Current Notional (USD)"?: string | null
          Cusip?: string | null
          "Digital Barrier"?: string | null
          "Distance To Cap"?: string | null
          "Downside Participation Rate"?: string | null
          "Final Valuation Date"?: string | null
          "Fixing Type"?: string | null
          "Gain Loss (USD)"?: string | null
          "Growth Type"?: string | null
          id?: number | null
          "Intrinsic Value"?: string | null
          "Investor Holding"?: string | null
          Isin?: string | null
          "Issue Date"?: string | null
          Issuer?: string | null
          "Issuer Abbr"?: string | null
          "Issuing Currency"?: string | null
          "Leverage Percentage"?: string | null
          "List Of Underliers"?: string | null
          "Mark To Market Price"?: string | null
          "Maturity Date"?: string | null
          "Max Return"?: string | null
          "Next Event Observation Date"?: string | null
          "Num No Call Periods"?: string | null
          "Payment Type"?: string | null
          "Payments Received Percent"?: string | null
          "Payments Remaining Percent"?: string | null
          "Product Type"?: string | null
          "Protection Level Percent"?: string | null
          "Protection Proximity Level Abs"?: string | null
          "Put Observation Freq"?: string | null
          "Range Accrual"?: string | null
          "Registration Type"?: string | null
          "Return Type"?: string | null
          "Settlement Type"?: string | null
          Status?: string | null
          "Strike Type"?: string | null
          "Structure Type"?: string | null
          "Time to Maturity (Months)"?: string | null
          "Total Payments Received Amount (USD)"?: string | null
          "Total Payments Received Count"?: string | null
          "Trade Date"?: string | null
          "Underlier 1 Coupon Barrier Level"?: string | null
          "Underlier 1 Currency"?: string | null
          "Underlier 1 Current Price"?: string | null
          "Underlier 1 Current Price Date"?: string | null
          "Underlier 1 Is Active"?: string | null
          "Underlier 1 Name"?: string | null
          "Underlier 1 Performance"?: string | null
          "Underlier 1 Strike Date"?: string | null
          "Underlier 1 Strike Price"?: string | null
          "Underlier 1 Symbol"?: string | null
          "Underlier 1 Weight"?: string | null
          "Underlier 10 Currency"?: string | null
          "Underlier 10 Current Price"?: string | null
          "Underlier 10 Current Price Date"?: string | null
          "Underlier 10 Is Active"?: string | null
          "Underlier 10 Name"?: string | null
          "Underlier 10 Performance"?: string | null
          "Underlier 10 Strike Date"?: string | null
          "Underlier 10 Strike Price"?: string | null
          "Underlier 10 Symbol"?: string | null
          "Underlier 10 Weight"?: string | null
          "Underlier 2 Coupon Barrier Level"?: string | null
          "Underlier 2 Currency"?: string | null
          "Underlier 2 Current Price"?: string | null
          "Underlier 2 Current Price Date"?: string | null
          "Underlier 2 Is Active"?: string | null
          "Underlier 2 Name"?: string | null
          "Underlier 2 Performance"?: string | null
          "Underlier 2 Strike Date"?: string | null
          "Underlier 2 Strike Price"?: string | null
          "Underlier 2 Symbol"?: string | null
          "Underlier 2 Weight"?: string | null
          "Underlier 3 Coupon Barrier Level"?: string | null
          "Underlier 3 Currency"?: string | null
          "Underlier 3 Current Price"?: string | null
          "Underlier 3 Current Price Date"?: string | null
          "Underlier 3 Is Active"?: string | null
          "Underlier 3 Name"?: string | null
          "Underlier 3 Performance"?: string | null
          "Underlier 3 Strike Date"?: string | null
          "Underlier 3 Strike Price"?: string | null
          "Underlier 3 Symbol"?: string | null
          "Underlier 3 Weight"?: string | null
          "Underlier 4 Coupon Barrier Level"?: string | null
          "Underlier 4 Currency"?: string | null
          "Underlier 4 Current Price"?: string | null
          "Underlier 4 Current Price Date"?: string | null
          "Underlier 4 Is Active"?: string | null
          "Underlier 4 Name"?: string | null
          "Underlier 4 Performance"?: string | null
          "Underlier 4 Strike Date"?: string | null
          "Underlier 4 Strike Price"?: string | null
          "Underlier 4 Symbol"?: string | null
          "Underlier 4 Weight"?: string | null
          "Underlier 5 Coupon Barrier Level"?: string | null
          "Underlier 5 Currency"?: string | null
          "Underlier 5 Current Price"?: string | null
          "Underlier 5 Current Price Date"?: string | null
          "Underlier 5 Is Active"?: string | null
          "Underlier 5 Name"?: string | null
          "Underlier 5 Performance"?: string | null
          "Underlier 5 Strike Date"?: string | null
          "Underlier 5 Strike Price"?: string | null
          "Underlier 5 Symbol"?: string | null
          "Underlier 5 Weight"?: string | null
          "Underlier 6 Currency"?: string | null
          "Underlier 6 Current Price"?: string | null
          "Underlier 6 Current Price Date"?: string | null
          "Underlier 6 Is Active"?: string | null
          "Underlier 6 Name"?: string | null
          "Underlier 6 Performance"?: string | null
          "Underlier 6 Strike Date"?: string | null
          "Underlier 6 Strike Price"?: string | null
          "Underlier 6 Symbol"?: string | null
          "Underlier 6 Weight"?: string | null
          "Underlier 7 Currency"?: string | null
          "Underlier 7 Current Price"?: string | null
          "Underlier 7 Current Price Date"?: string | null
          "Underlier 7 Is Active"?: string | null
          "Underlier 7 Name"?: string | null
          "Underlier 7 Performance"?: string | null
          "Underlier 7 Strike Date"?: string | null
          "Underlier 7 Strike Price"?: string | null
          "Underlier 7 Symbol"?: string | null
          "Underlier 7 Weight"?: string | null
          "Underlier 8 Currency"?: string | null
          "Underlier 8 Current Price"?: string | null
          "Underlier 8 Current Price Date"?: string | null
          "Underlier 8 Is Active"?: string | null
          "Underlier 8 Name"?: string | null
          "Underlier 8 Performance"?: string | null
          "Underlier 8 Strike Date"?: string | null
          "Underlier 8 Strike Price"?: string | null
          "Underlier 8 Symbol"?: string | null
          "Underlier 8 Weight"?: string | null
          "Underlier 9 Currency"?: string | null
          "Underlier 9 Current Price"?: string | null
          "Underlier 9 Current Price Date"?: string | null
          "Underlier 9 Is Active"?: string | null
          "Underlier 9 Name"?: string | null
          "Underlier 9 Performance"?: string | null
          "Underlier 9 Strike Date"?: string | null
          "Underlier 9 Strike Price"?: string | null
          "Underlier 9 Symbol"?: string | null
          "Underlier 9 Weight"?: string | null
          "Underlier Class"?: string | null
          "Underlier Performance Percent"?: string | null
          "Upside Participation Rate"?: string | null
        }
        Update: {
          "Account Id"?: string | null
          "Active Underlier"?: string | null
          "Active Underlier Strike Level (USD)"?: string | null
          Advisor?: string | null
          "Basket Type"?: string | null
          "Call Barrier"?: string | null
          "Call Barrier Observation Freq"?: string | null
          "Call Observation Freq"?: string | null
          "Cap Percentage"?: string | null
          "Capped/Uncapped"?: string | null
          "Coupon Barrier"?: string | null
          "Coupon Barrier Observation Freq"?: string | null
          "Coupon Observation Freq"?: string | null
          "Coupon Payment Freq"?: string | null
          "Coupon Rate Per Annum Percent"?: string | null
          "Coupon Rate Percent"?: string | null
          "Coupon Type"?: string | null
          "Current Inventory"?: string | null
          "Current Notional (USD)"?: string | null
          Cusip?: string | null
          "Digital Barrier"?: string | null
          "Distance To Cap"?: string | null
          "Downside Participation Rate"?: string | null
          "Final Valuation Date"?: string | null
          "Fixing Type"?: string | null
          "Gain Loss (USD)"?: string | null
          "Growth Type"?: string | null
          id?: number | null
          "Intrinsic Value"?: string | null
          "Investor Holding"?: string | null
          Isin?: string | null
          "Issue Date"?: string | null
          Issuer?: string | null
          "Issuer Abbr"?: string | null
          "Issuing Currency"?: string | null
          "Leverage Percentage"?: string | null
          "List Of Underliers"?: string | null
          "Mark To Market Price"?: string | null
          "Maturity Date"?: string | null
          "Max Return"?: string | null
          "Next Event Observation Date"?: string | null
          "Num No Call Periods"?: string | null
          "Payment Type"?: string | null
          "Payments Received Percent"?: string | null
          "Payments Remaining Percent"?: string | null
          "Product Type"?: string | null
          "Protection Level Percent"?: string | null
          "Protection Proximity Level Abs"?: string | null
          "Put Observation Freq"?: string | null
          "Range Accrual"?: string | null
          "Registration Type"?: string | null
          "Return Type"?: string | null
          "Settlement Type"?: string | null
          Status?: string | null
          "Strike Type"?: string | null
          "Structure Type"?: string | null
          "Time to Maturity (Months)"?: string | null
          "Total Payments Received Amount (USD)"?: string | null
          "Total Payments Received Count"?: string | null
          "Trade Date"?: string | null
          "Underlier 1 Coupon Barrier Level"?: string | null
          "Underlier 1 Currency"?: string | null
          "Underlier 1 Current Price"?: string | null
          "Underlier 1 Current Price Date"?: string | null
          "Underlier 1 Is Active"?: string | null
          "Underlier 1 Name"?: string | null
          "Underlier 1 Performance"?: string | null
          "Underlier 1 Strike Date"?: string | null
          "Underlier 1 Strike Price"?: string | null
          "Underlier 1 Symbol"?: string | null
          "Underlier 1 Weight"?: string | null
          "Underlier 10 Currency"?: string | null
          "Underlier 10 Current Price"?: string | null
          "Underlier 10 Current Price Date"?: string | null
          "Underlier 10 Is Active"?: string | null
          "Underlier 10 Name"?: string | null
          "Underlier 10 Performance"?: string | null
          "Underlier 10 Strike Date"?: string | null
          "Underlier 10 Strike Price"?: string | null
          "Underlier 10 Symbol"?: string | null
          "Underlier 10 Weight"?: string | null
          "Underlier 2 Coupon Barrier Level"?: string | null
          "Underlier 2 Currency"?: string | null
          "Underlier 2 Current Price"?: string | null
          "Underlier 2 Current Price Date"?: string | null
          "Underlier 2 Is Active"?: string | null
          "Underlier 2 Name"?: string | null
          "Underlier 2 Performance"?: string | null
          "Underlier 2 Strike Date"?: string | null
          "Underlier 2 Strike Price"?: string | null
          "Underlier 2 Symbol"?: string | null
          "Underlier 2 Weight"?: string | null
          "Underlier 3 Coupon Barrier Level"?: string | null
          "Underlier 3 Currency"?: string | null
          "Underlier 3 Current Price"?: string | null
          "Underlier 3 Current Price Date"?: string | null
          "Underlier 3 Is Active"?: string | null
          "Underlier 3 Name"?: string | null
          "Underlier 3 Performance"?: string | null
          "Underlier 3 Strike Date"?: string | null
          "Underlier 3 Strike Price"?: string | null
          "Underlier 3 Symbol"?: string | null
          "Underlier 3 Weight"?: string | null
          "Underlier 4 Coupon Barrier Level"?: string | null
          "Underlier 4 Currency"?: string | null
          "Underlier 4 Current Price"?: string | null
          "Underlier 4 Current Price Date"?: string | null
          "Underlier 4 Is Active"?: string | null
          "Underlier 4 Name"?: string | null
          "Underlier 4 Performance"?: string | null
          "Underlier 4 Strike Date"?: string | null
          "Underlier 4 Strike Price"?: string | null
          "Underlier 4 Symbol"?: string | null
          "Underlier 4 Weight"?: string | null
          "Underlier 5 Coupon Barrier Level"?: string | null
          "Underlier 5 Currency"?: string | null
          "Underlier 5 Current Price"?: string | null
          "Underlier 5 Current Price Date"?: string | null
          "Underlier 5 Is Active"?: string | null
          "Underlier 5 Name"?: string | null
          "Underlier 5 Performance"?: string | null
          "Underlier 5 Strike Date"?: string | null
          "Underlier 5 Strike Price"?: string | null
          "Underlier 5 Symbol"?: string | null
          "Underlier 5 Weight"?: string | null
          "Underlier 6 Currency"?: string | null
          "Underlier 6 Current Price"?: string | null
          "Underlier 6 Current Price Date"?: string | null
          "Underlier 6 Is Active"?: string | null
          "Underlier 6 Name"?: string | null
          "Underlier 6 Performance"?: string | null
          "Underlier 6 Strike Date"?: string | null
          "Underlier 6 Strike Price"?: string | null
          "Underlier 6 Symbol"?: string | null
          "Underlier 6 Weight"?: string | null
          "Underlier 7 Currency"?: string | null
          "Underlier 7 Current Price"?: string | null
          "Underlier 7 Current Price Date"?: string | null
          "Underlier 7 Is Active"?: string | null
          "Underlier 7 Name"?: string | null
          "Underlier 7 Performance"?: string | null
          "Underlier 7 Strike Date"?: string | null
          "Underlier 7 Strike Price"?: string | null
          "Underlier 7 Symbol"?: string | null
          "Underlier 7 Weight"?: string | null
          "Underlier 8 Currency"?: string | null
          "Underlier 8 Current Price"?: string | null
          "Underlier 8 Current Price Date"?: string | null
          "Underlier 8 Is Active"?: string | null
          "Underlier 8 Name"?: string | null
          "Underlier 8 Performance"?: string | null
          "Underlier 8 Strike Date"?: string | null
          "Underlier 8 Strike Price"?: string | null
          "Underlier 8 Symbol"?: string | null
          "Underlier 8 Weight"?: string | null
          "Underlier 9 Currency"?: string | null
          "Underlier 9 Current Price"?: string | null
          "Underlier 9 Current Price Date"?: string | null
          "Underlier 9 Is Active"?: string | null
          "Underlier 9 Name"?: string | null
          "Underlier 9 Performance"?: string | null
          "Underlier 9 Strike Date"?: string | null
          "Underlier 9 Strike Price"?: string | null
          "Underlier 9 Symbol"?: string | null
          "Underlier 9 Weight"?: string | null
          "Underlier Class"?: string | null
          "Underlier Performance Percent"?: string | null
          "Upside Participation Rate"?: string | null
        }
        Relationships: []
      }
      raw_luma_data_backup_field_changes: {
        Row: {
          "Account Id": string | null
          "Active Underlier": string | null
          "Active Underlier Strike Level (USD)": string | null
          "Basket Type": string | null
          "Call Barrier": string | null
          "Call Barrier Observation Freq": string | null
          "Call Observation Freq": string | null
          "Cap Percentage": string | null
          "Capped/Uncapped": string | null
          "Coupon Barrier": string | null
          "Coupon Barrier Observation Freq": string | null
          "Coupon Observation Freq": string | null
          "Coupon Payment Freq": string | null
          "Coupon Rate Per Annum Percent": string | null
          "Coupon Rate Percent": string | null
          "Coupon Type": string | null
          "Current Inventory": string | null
          Cusip: string | null
          "Digital Barrier": string | null
          "Distance To Cap": string | null
          "Downside Participation Rate": string | null
          "Final Valuation Date": string | null
          "Fixing Type": string | null
          "Gain Loss (USD)": string | null
          "Growth Type": string | null
          id: number | null
          "Intrinsic Value": string | null
          Isin: string | null
          "Issue Date": string | null
          Issuer: string | null
          "Issuer Abbr": string | null
          "Issuing Currency": string | null
          "Leverage Percentage": string | null
          "List Of Underliers": string | null
          "Mark To Market Value": string | null
          "Maturity Date": string | null
          "Max Return": string | null
          "Next Event Observation Date": string | null
          "Num No Call Periods": string | null
          "Payment Type": string | null
          "Payments Received Percent": string | null
          "Payments Remaining Percent": string | null
          "Product Type": string | null
          "Protection Level Percent": string | null
          "Protection Proximity Level Abs": string | null
          "Put Observation Freq": string | null
          "Range Accrual": string | null
          "Registration Type": string | null
          "Rep Name": string | null
          "Return Type": string | null
          "Settlement Type": string | null
          Status: string | null
          "Strike Type": string | null
          "Structure Type": string | null
          "Time to Maturity (Months)": string | null
          "Total Holdings": string | null
          "Total Notional (USD)": string | null
          "Total Payments Received Amount (USD)": string | null
          "Total Payments Received Count": string | null
          "Trade Date": string | null
          "Underlier 1 Coupon Barrier Level": string | null
          "Underlier 1 Currency": string | null
          "Underlier 1 Current Price": string | null
          "Underlier 1 Current Price Date": string | null
          "Underlier 1 Is Active": string | null
          "Underlier 1 Name": string | null
          "Underlier 1 Performance": string | null
          "Underlier 1 Strike Date": string | null
          "Underlier 1 Strike Price": string | null
          "Underlier 1 Symbol": string | null
          "Underlier 1 Weight": string | null
          "Underlier 10 Currency": string | null
          "Underlier 10 Current Price": string | null
          "Underlier 10 Current Price Date": string | null
          "Underlier 10 Is Active": string | null
          "Underlier 10 Name": string | null
          "Underlier 10 Performance": string | null
          "Underlier 10 Strike Date": string | null
          "Underlier 10 Strike Price": string | null
          "Underlier 10 Symbol": string | null
          "Underlier 10 Weight": string | null
          "Underlier 2 Coupon Barrier Level": string | null
          "Underlier 2 Currency": string | null
          "Underlier 2 Current Price": string | null
          "Underlier 2 Current Price Date": string | null
          "Underlier 2 Is Active": string | null
          "Underlier 2 Name": string | null
          "Underlier 2 Performance": string | null
          "Underlier 2 Strike Date": string | null
          "Underlier 2 Strike Price": string | null
          "Underlier 2 Symbol": string | null
          "Underlier 2 Weight": string | null
          "Underlier 3 Coupon Barrier Level": string | null
          "Underlier 3 Currency": string | null
          "Underlier 3 Current Price": string | null
          "Underlier 3 Current Price Date": string | null
          "Underlier 3 Is Active": string | null
          "Underlier 3 Name": string | null
          "Underlier 3 Performance": string | null
          "Underlier 3 Strike Date": string | null
          "Underlier 3 Strike Price": string | null
          "Underlier 3 Symbol": string | null
          "Underlier 3 Weight": string | null
          "Underlier 4 Coupon Barrier Level": string | null
          "Underlier 4 Currency": string | null
          "Underlier 4 Current Price": string | null
          "Underlier 4 Current Price Date": string | null
          "Underlier 4 Is Active": string | null
          "Underlier 4 Name": string | null
          "Underlier 4 Performance": string | null
          "Underlier 4 Strike Date": string | null
          "Underlier 4 Strike Price": string | null
          "Underlier 4 Symbol": string | null
          "Underlier 4 Weight": string | null
          "Underlier 5 Coupon Barrier Level": string | null
          "Underlier 5 Currency": string | null
          "Underlier 5 Current Price": string | null
          "Underlier 5 Current Price Date": string | null
          "Underlier 5 Is Active": string | null
          "Underlier 5 Name": string | null
          "Underlier 5 Performance": string | null
          "Underlier 5 Strike Date": string | null
          "Underlier 5 Strike Price": string | null
          "Underlier 5 Symbol": string | null
          "Underlier 5 Weight": string | null
          "Underlier 6 Currency": string | null
          "Underlier 6 Current Price": string | null
          "Underlier 6 Current Price Date": string | null
          "Underlier 6 Is Active": string | null
          "Underlier 6 Name": string | null
          "Underlier 6 Performance": string | null
          "Underlier 6 Strike Date": string | null
          "Underlier 6 Strike Price": string | null
          "Underlier 6 Symbol": string | null
          "Underlier 6 Weight": string | null
          "Underlier 7 Currency": string | null
          "Underlier 7 Current Price": string | null
          "Underlier 7 Current Price Date": string | null
          "Underlier 7 Is Active": string | null
          "Underlier 7 Name": string | null
          "Underlier 7 Performance": string | null
          "Underlier 7 Strike Date": string | null
          "Underlier 7 Strike Price": string | null
          "Underlier 7 Symbol": string | null
          "Underlier 7 Weight": string | null
          "Underlier 8 Currency": string | null
          "Underlier 8 Current Price": string | null
          "Underlier 8 Current Price Date": string | null
          "Underlier 8 Is Active": string | null
          "Underlier 8 Name": string | null
          "Underlier 8 Performance": string | null
          "Underlier 8 Strike Date": string | null
          "Underlier 8 Strike Price": string | null
          "Underlier 8 Symbol": string | null
          "Underlier 8 Weight": string | null
          "Underlier 9 Currency": string | null
          "Underlier 9 Current Price": string | null
          "Underlier 9 Current Price Date": string | null
          "Underlier 9 Is Active": string | null
          "Underlier 9 Name": string | null
          "Underlier 9 Performance": string | null
          "Underlier 9 Strike Date": string | null
          "Underlier 9 Strike Price": string | null
          "Underlier 9 Symbol": string | null
          "Underlier 9 Weight": string | null
          "Underlier Class": string | null
          "Underlier Performance Percent": string | null
          "Upside Participation Rate": string | null
        }
        Insert: {
          "Account Id"?: string | null
          "Active Underlier"?: string | null
          "Active Underlier Strike Level (USD)"?: string | null
          "Basket Type"?: string | null
          "Call Barrier"?: string | null
          "Call Barrier Observation Freq"?: string | null
          "Call Observation Freq"?: string | null
          "Cap Percentage"?: string | null
          "Capped/Uncapped"?: string | null
          "Coupon Barrier"?: string | null
          "Coupon Barrier Observation Freq"?: string | null
          "Coupon Observation Freq"?: string | null
          "Coupon Payment Freq"?: string | null
          "Coupon Rate Per Annum Percent"?: string | null
          "Coupon Rate Percent"?: string | null
          "Coupon Type"?: string | null
          "Current Inventory"?: string | null
          Cusip?: string | null
          "Digital Barrier"?: string | null
          "Distance To Cap"?: string | null
          "Downside Participation Rate"?: string | null
          "Final Valuation Date"?: string | null
          "Fixing Type"?: string | null
          "Gain Loss (USD)"?: string | null
          "Growth Type"?: string | null
          id?: number | null
          "Intrinsic Value"?: string | null
          Isin?: string | null
          "Issue Date"?: string | null
          Issuer?: string | null
          "Issuer Abbr"?: string | null
          "Issuing Currency"?: string | null
          "Leverage Percentage"?: string | null
          "List Of Underliers"?: string | null
          "Mark To Market Value"?: string | null
          "Maturity Date"?: string | null
          "Max Return"?: string | null
          "Next Event Observation Date"?: string | null
          "Num No Call Periods"?: string | null
          "Payment Type"?: string | null
          "Payments Received Percent"?: string | null
          "Payments Remaining Percent"?: string | null
          "Product Type"?: string | null
          "Protection Level Percent"?: string | null
          "Protection Proximity Level Abs"?: string | null
          "Put Observation Freq"?: string | null
          "Range Accrual"?: string | null
          "Registration Type"?: string | null
          "Rep Name"?: string | null
          "Return Type"?: string | null
          "Settlement Type"?: string | null
          Status?: string | null
          "Strike Type"?: string | null
          "Structure Type"?: string | null
          "Time to Maturity (Months)"?: string | null
          "Total Holdings"?: string | null
          "Total Notional (USD)"?: string | null
          "Total Payments Received Amount (USD)"?: string | null
          "Total Payments Received Count"?: string | null
          "Trade Date"?: string | null
          "Underlier 1 Coupon Barrier Level"?: string | null
          "Underlier 1 Currency"?: string | null
          "Underlier 1 Current Price"?: string | null
          "Underlier 1 Current Price Date"?: string | null
          "Underlier 1 Is Active"?: string | null
          "Underlier 1 Name"?: string | null
          "Underlier 1 Performance"?: string | null
          "Underlier 1 Strike Date"?: string | null
          "Underlier 1 Strike Price"?: string | null
          "Underlier 1 Symbol"?: string | null
          "Underlier 1 Weight"?: string | null
          "Underlier 10 Currency"?: string | null
          "Underlier 10 Current Price"?: string | null
          "Underlier 10 Current Price Date"?: string | null
          "Underlier 10 Is Active"?: string | null
          "Underlier 10 Name"?: string | null
          "Underlier 10 Performance"?: string | null
          "Underlier 10 Strike Date"?: string | null
          "Underlier 10 Strike Price"?: string | null
          "Underlier 10 Symbol"?: string | null
          "Underlier 10 Weight"?: string | null
          "Underlier 2 Coupon Barrier Level"?: string | null
          "Underlier 2 Currency"?: string | null
          "Underlier 2 Current Price"?: string | null
          "Underlier 2 Current Price Date"?: string | null
          "Underlier 2 Is Active"?: string | null
          "Underlier 2 Name"?: string | null
          "Underlier 2 Performance"?: string | null
          "Underlier 2 Strike Date"?: string | null
          "Underlier 2 Strike Price"?: string | null
          "Underlier 2 Symbol"?: string | null
          "Underlier 2 Weight"?: string | null
          "Underlier 3 Coupon Barrier Level"?: string | null
          "Underlier 3 Currency"?: string | null
          "Underlier 3 Current Price"?: string | null
          "Underlier 3 Current Price Date"?: string | null
          "Underlier 3 Is Active"?: string | null
          "Underlier 3 Name"?: string | null
          "Underlier 3 Performance"?: string | null
          "Underlier 3 Strike Date"?: string | null
          "Underlier 3 Strike Price"?: string | null
          "Underlier 3 Symbol"?: string | null
          "Underlier 3 Weight"?: string | null
          "Underlier 4 Coupon Barrier Level"?: string | null
          "Underlier 4 Currency"?: string | null
          "Underlier 4 Current Price"?: string | null
          "Underlier 4 Current Price Date"?: string | null
          "Underlier 4 Is Active"?: string | null
          "Underlier 4 Name"?: string | null
          "Underlier 4 Performance"?: string | null
          "Underlier 4 Strike Date"?: string | null
          "Underlier 4 Strike Price"?: string | null
          "Underlier 4 Symbol"?: string | null
          "Underlier 4 Weight"?: string | null
          "Underlier 5 Coupon Barrier Level"?: string | null
          "Underlier 5 Currency"?: string | null
          "Underlier 5 Current Price"?: string | null
          "Underlier 5 Current Price Date"?: string | null
          "Underlier 5 Is Active"?: string | null
          "Underlier 5 Name"?: string | null
          "Underlier 5 Performance"?: string | null
          "Underlier 5 Strike Date"?: string | null
          "Underlier 5 Strike Price"?: string | null
          "Underlier 5 Symbol"?: string | null
          "Underlier 5 Weight"?: string | null
          "Underlier 6 Currency"?: string | null
          "Underlier 6 Current Price"?: string | null
          "Underlier 6 Current Price Date"?: string | null
          "Underlier 6 Is Active"?: string | null
          "Underlier 6 Name"?: string | null
          "Underlier 6 Performance"?: string | null
          "Underlier 6 Strike Date"?: string | null
          "Underlier 6 Strike Price"?: string | null
          "Underlier 6 Symbol"?: string | null
          "Underlier 6 Weight"?: string | null
          "Underlier 7 Currency"?: string | null
          "Underlier 7 Current Price"?: string | null
          "Underlier 7 Current Price Date"?: string | null
          "Underlier 7 Is Active"?: string | null
          "Underlier 7 Name"?: string | null
          "Underlier 7 Performance"?: string | null
          "Underlier 7 Strike Date"?: string | null
          "Underlier 7 Strike Price"?: string | null
          "Underlier 7 Symbol"?: string | null
          "Underlier 7 Weight"?: string | null
          "Underlier 8 Currency"?: string | null
          "Underlier 8 Current Price"?: string | null
          "Underlier 8 Current Price Date"?: string | null
          "Underlier 8 Is Active"?: string | null
          "Underlier 8 Name"?: string | null
          "Underlier 8 Performance"?: string | null
          "Underlier 8 Strike Date"?: string | null
          "Underlier 8 Strike Price"?: string | null
          "Underlier 8 Symbol"?: string | null
          "Underlier 8 Weight"?: string | null
          "Underlier 9 Currency"?: string | null
          "Underlier 9 Current Price"?: string | null
          "Underlier 9 Current Price Date"?: string | null
          "Underlier 9 Is Active"?: string | null
          "Underlier 9 Name"?: string | null
          "Underlier 9 Performance"?: string | null
          "Underlier 9 Strike Date"?: string | null
          "Underlier 9 Strike Price"?: string | null
          "Underlier 9 Symbol"?: string | null
          "Underlier 9 Weight"?: string | null
          "Underlier Class"?: string | null
          "Underlier Performance Percent"?: string | null
          "Upside Participation Rate"?: string | null
        }
        Update: {
          "Account Id"?: string | null
          "Active Underlier"?: string | null
          "Active Underlier Strike Level (USD)"?: string | null
          "Basket Type"?: string | null
          "Call Barrier"?: string | null
          "Call Barrier Observation Freq"?: string | null
          "Call Observation Freq"?: string | null
          "Cap Percentage"?: string | null
          "Capped/Uncapped"?: string | null
          "Coupon Barrier"?: string | null
          "Coupon Barrier Observation Freq"?: string | null
          "Coupon Observation Freq"?: string | null
          "Coupon Payment Freq"?: string | null
          "Coupon Rate Per Annum Percent"?: string | null
          "Coupon Rate Percent"?: string | null
          "Coupon Type"?: string | null
          "Current Inventory"?: string | null
          Cusip?: string | null
          "Digital Barrier"?: string | null
          "Distance To Cap"?: string | null
          "Downside Participation Rate"?: string | null
          "Final Valuation Date"?: string | null
          "Fixing Type"?: string | null
          "Gain Loss (USD)"?: string | null
          "Growth Type"?: string | null
          id?: number | null
          "Intrinsic Value"?: string | null
          Isin?: string | null
          "Issue Date"?: string | null
          Issuer?: string | null
          "Issuer Abbr"?: string | null
          "Issuing Currency"?: string | null
          "Leverage Percentage"?: string | null
          "List Of Underliers"?: string | null
          "Mark To Market Value"?: string | null
          "Maturity Date"?: string | null
          "Max Return"?: string | null
          "Next Event Observation Date"?: string | null
          "Num No Call Periods"?: string | null
          "Payment Type"?: string | null
          "Payments Received Percent"?: string | null
          "Payments Remaining Percent"?: string | null
          "Product Type"?: string | null
          "Protection Level Percent"?: string | null
          "Protection Proximity Level Abs"?: string | null
          "Put Observation Freq"?: string | null
          "Range Accrual"?: string | null
          "Registration Type"?: string | null
          "Rep Name"?: string | null
          "Return Type"?: string | null
          "Settlement Type"?: string | null
          Status?: string | null
          "Strike Type"?: string | null
          "Structure Type"?: string | null
          "Time to Maturity (Months)"?: string | null
          "Total Holdings"?: string | null
          "Total Notional (USD)"?: string | null
          "Total Payments Received Amount (USD)"?: string | null
          "Total Payments Received Count"?: string | null
          "Trade Date"?: string | null
          "Underlier 1 Coupon Barrier Level"?: string | null
          "Underlier 1 Currency"?: string | null
          "Underlier 1 Current Price"?: string | null
          "Underlier 1 Current Price Date"?: string | null
          "Underlier 1 Is Active"?: string | null
          "Underlier 1 Name"?: string | null
          "Underlier 1 Performance"?: string | null
          "Underlier 1 Strike Date"?: string | null
          "Underlier 1 Strike Price"?: string | null
          "Underlier 1 Symbol"?: string | null
          "Underlier 1 Weight"?: string | null
          "Underlier 10 Currency"?: string | null
          "Underlier 10 Current Price"?: string | null
          "Underlier 10 Current Price Date"?: string | null
          "Underlier 10 Is Active"?: string | null
          "Underlier 10 Name"?: string | null
          "Underlier 10 Performance"?: string | null
          "Underlier 10 Strike Date"?: string | null
          "Underlier 10 Strike Price"?: string | null
          "Underlier 10 Symbol"?: string | null
          "Underlier 10 Weight"?: string | null
          "Underlier 2 Coupon Barrier Level"?: string | null
          "Underlier 2 Currency"?: string | null
          "Underlier 2 Current Price"?: string | null
          "Underlier 2 Current Price Date"?: string | null
          "Underlier 2 Is Active"?: string | null
          "Underlier 2 Name"?: string | null
          "Underlier 2 Performance"?: string | null
          "Underlier 2 Strike Date"?: string | null
          "Underlier 2 Strike Price"?: string | null
          "Underlier 2 Symbol"?: string | null
          "Underlier 2 Weight"?: string | null
          "Underlier 3 Coupon Barrier Level"?: string | null
          "Underlier 3 Currency"?: string | null
          "Underlier 3 Current Price"?: string | null
          "Underlier 3 Current Price Date"?: string | null
          "Underlier 3 Is Active"?: string | null
          "Underlier 3 Name"?: string | null
          "Underlier 3 Performance"?: string | null
          "Underlier 3 Strike Date"?: string | null
          "Underlier 3 Strike Price"?: string | null
          "Underlier 3 Symbol"?: string | null
          "Underlier 3 Weight"?: string | null
          "Underlier 4 Coupon Barrier Level"?: string | null
          "Underlier 4 Currency"?: string | null
          "Underlier 4 Current Price"?: string | null
          "Underlier 4 Current Price Date"?: string | null
          "Underlier 4 Is Active"?: string | null
          "Underlier 4 Name"?: string | null
          "Underlier 4 Performance"?: string | null
          "Underlier 4 Strike Date"?: string | null
          "Underlier 4 Strike Price"?: string | null
          "Underlier 4 Symbol"?: string | null
          "Underlier 4 Weight"?: string | null
          "Underlier 5 Coupon Barrier Level"?: string | null
          "Underlier 5 Currency"?: string | null
          "Underlier 5 Current Price"?: string | null
          "Underlier 5 Current Price Date"?: string | null
          "Underlier 5 Is Active"?: string | null
          "Underlier 5 Name"?: string | null
          "Underlier 5 Performance"?: string | null
          "Underlier 5 Strike Date"?: string | null
          "Underlier 5 Strike Price"?: string | null
          "Underlier 5 Symbol"?: string | null
          "Underlier 5 Weight"?: string | null
          "Underlier 6 Currency"?: string | null
          "Underlier 6 Current Price"?: string | null
          "Underlier 6 Current Price Date"?: string | null
          "Underlier 6 Is Active"?: string | null
          "Underlier 6 Name"?: string | null
          "Underlier 6 Performance"?: string | null
          "Underlier 6 Strike Date"?: string | null
          "Underlier 6 Strike Price"?: string | null
          "Underlier 6 Symbol"?: string | null
          "Underlier 6 Weight"?: string | null
          "Underlier 7 Currency"?: string | null
          "Underlier 7 Current Price"?: string | null
          "Underlier 7 Current Price Date"?: string | null
          "Underlier 7 Is Active"?: string | null
          "Underlier 7 Name"?: string | null
          "Underlier 7 Performance"?: string | null
          "Underlier 7 Strike Date"?: string | null
          "Underlier 7 Strike Price"?: string | null
          "Underlier 7 Symbol"?: string | null
          "Underlier 7 Weight"?: string | null
          "Underlier 8 Currency"?: string | null
          "Underlier 8 Current Price"?: string | null
          "Underlier 8 Current Price Date"?: string | null
          "Underlier 8 Is Active"?: string | null
          "Underlier 8 Name"?: string | null
          "Underlier 8 Performance"?: string | null
          "Underlier 8 Strike Date"?: string | null
          "Underlier 8 Strike Price"?: string | null
          "Underlier 8 Symbol"?: string | null
          "Underlier 8 Weight"?: string | null
          "Underlier 9 Currency"?: string | null
          "Underlier 9 Current Price"?: string | null
          "Underlier 9 Current Price Date"?: string | null
          "Underlier 9 Is Active"?: string | null
          "Underlier 9 Name"?: string | null
          "Underlier 9 Performance"?: string | null
          "Underlier 9 Strike Date"?: string | null
          "Underlier 9 Strike Price"?: string | null
          "Underlier 9 Symbol"?: string | null
          "Underlier 9 Weight"?: string | null
          "Underlier Class"?: string | null
          "Underlier Performance Percent"?: string | null
          "Upside Participation Rate"?: string | null
        }
        Relationships: []
      }
      report_config: {
        Row: {
          accent_color: string | null
          advisor_id: string
          created_at: string
          digital_strategy_name: string
          growth_strategy_name: string
          id: string
          income_strategy_name: string
          logo_url: string | null
          primary_color: string | null
          report_name: string
          secondary_color: string | null
          updated_at: string
        }
        Insert: {
          accent_color?: string | null
          advisor_id: string
          created_at?: string
          digital_strategy_name?: string
          growth_strategy_name?: string
          id?: string
          income_strategy_name?: string
          logo_url?: string | null
          primary_color?: string | null
          report_name?: string
          secondary_color?: string | null
          updated_at?: string
        }
        Update: {
          accent_color?: string | null
          advisor_id?: string
          created_at?: string
          digital_strategy_name?: string
          growth_strategy_name?: string
          id?: string
          income_strategy_name?: string
          logo_url?: string | null
          primary_color?: string | null
          report_name?: string
          secondary_color?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "report_config_advisor_id_fkey"
            columns: ["advisor_id"]
            isOneToOne: true
            referencedRelation: "advisors"
            referencedColumns: ["id"]
          },
        ]
      }
      strategies: {
        Row: {
          allowed_payment_frequencies: string[] | null
          allowed_return_types: string[] | null
          category: string
          core_defensive_pct: number | null
          core_growth_pct: number | null
          created_at: string | null
          description: string | null
          id: string
          implementation_period_months: number | null
          max_abstract_pct: number | null
          max_bank_exposure_pct: number | null
          max_etf_exposure_pct: number | null
          max_index_exposure_pct: number | null
          max_single_stock_exposure_pct: number | null
          max_tenor_years: number | null
          min_barrier_level: number | null
          min_buffer_level: number | null
          min_coupon_barrier: number | null
          min_participation_rate: number | null
          min_tenor_years: number | null
          monthly_implementation_pct: number | null
          must_be_uncapped: boolean | null
          name: string
          protection_type: string[] | null
          target_return_spread_bps: number | null
          updated_at: string | null
        }
        Insert: {
          allowed_payment_frequencies?: string[] | null
          allowed_return_types?: string[] | null
          category: string
          core_defensive_pct?: number | null
          core_growth_pct?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          implementation_period_months?: number | null
          max_abstract_pct?: number | null
          max_bank_exposure_pct?: number | null
          max_etf_exposure_pct?: number | null
          max_index_exposure_pct?: number | null
          max_single_stock_exposure_pct?: number | null
          max_tenor_years?: number | null
          min_barrier_level?: number | null
          min_buffer_level?: number | null
          min_coupon_barrier?: number | null
          min_participation_rate?: number | null
          min_tenor_years?: number | null
          monthly_implementation_pct?: number | null
          must_be_uncapped?: boolean | null
          name: string
          protection_type?: string[] | null
          target_return_spread_bps?: number | null
          updated_at?: string | null
        }
        Update: {
          allowed_payment_frequencies?: string[] | null
          allowed_return_types?: string[] | null
          category?: string
          core_defensive_pct?: number | null
          core_growth_pct?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          implementation_period_months?: number | null
          max_abstract_pct?: number | null
          max_bank_exposure_pct?: number | null
          max_etf_exposure_pct?: number | null
          max_index_exposure_pct?: number | null
          max_single_stock_exposure_pct?: number | null
          max_tenor_years?: number | null
          min_barrier_level?: number | null
          min_buffer_level?: number | null
          min_coupon_barrier?: number | null
          min_participation_rate?: number | null
          min_tenor_years?: number | null
          monthly_implementation_pct?: number | null
          must_be_uncapped?: boolean | null
          name?: string
          protection_type?: string[] | null
          target_return_spread_bps?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      strategy_underliers: {
        Row: {
          created_at: string | null
          id: string
          max_basket_size: number | null
          min_premium_increase_pct: number | null
          strategy_id: string | null
          underlier_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          max_basket_size?: number | null
          min_premium_increase_pct?: number | null
          strategy_id?: string | null
          underlier_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          max_basket_size?: number | null
          min_premium_increase_pct?: number | null
          strategy_id?: string | null
          underlier_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "strategy_underliers_strategy_id_fkey"
            columns: ["strategy_id"]
            isOneToOne: false
            referencedRelation: "strategies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "strategy_underliers_underlier_id_fkey"
            columns: ["underlier_id"]
            isOneToOne: false
            referencedRelation: "underliers"
            referencedColumns: ["id"]
          },
        ]
      }
      underliers: {
        Row: {
          asset_class: string
          category: string
          created_at: string | null
          display_name: string | null
          exchange_suffix: string | null
          id: string
          is_active: boolean | null
          region: string | null
          symbol: string
        }
        Insert: {
          asset_class: string
          category: string
          created_at?: string | null
          display_name?: string | null
          exchange_suffix?: string | null
          id?: string
          is_active?: boolean | null
          region?: string | null
          symbol: string
        }
        Update: {
          asset_class?: string
          category?: string
          created_at?: string | null
          display_name?: string | null
          exchange_suffix?: string | null
          id?: string
          is_active?: boolean | null
          region?: string | null
          symbol?: string
        }
        Relationships: []
      }
      upload_status: {
        Row: {
          created_at: string
          error: string | null
          file_name: string
          id: string
          processed_rows: number
          status: string
          total_rows: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          error?: string | null
          file_name: string
          id?: string
          processed_rows?: number
          status: string
          total_rows: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          error?: string | null
          file_name?: string
          id?: string
          processed_rows?: number
          status?: string
          total_rows?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          auth_id: string
          created_at: string | null
          id: string
          name: string
          role: string
        }
        Insert: {
          auth_id: string
          created_at?: string | null
          id?: string
          name: string
          role: string
        }
        Update: {
          auth_id?: string
          created_at?: string | null
          id?: string
          name?: string
          role?: string
        }
        Relationships: []
      }
    }
    Views: {
      maturity_analysis: {
        Row: {
          account_name: string | null
          account_product_id: string | null
          advisor_id: string | null
          amount_invested: number | null
          bucket_type: string | null
          client_account_id: string | null
          cusip: string | null
          first_call_date: string | null
          intrinsic_value: number | null
          is_income_note: boolean | null
          maturity_date: string | null
          mtm_price: number | null
          notional_value: number | null
          return_type: string | null
          timeline_bucket: string | null
          total_payments_received_amount: number | null
          total_payments_received_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "account_products_account_id_fkey"
            columns: ["client_account_id"]
            isOneToOne: false
            referencedRelation: "client_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "account_products_cusip_fkey"
            columns: ["cusip"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["cusip"]
          },
          {
            foreignKeyName: "client_accounts_advisor_id_fkey"
            columns: ["advisor_id"]
            isOneToOne: false
            referencedRelation: "advisors"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      batch_insert_raw_luma_data: {
        Args: { records: Json }
        Returns: undefined
      }
      calculate_account_value: {
        Args: { input_account_id: string }
        Returns: number
      }
      calculate_account_values: {
        Args: { input_account_id: string }
        Returns: undefined
      }
      calculate_first_call_date: {
        Args: {
          p_trade_date: string
          p_num_no_call_periods: number
          p_call_observation_freq: string
        }
        Returns: string
      }
      calculate_portfolio_exposures: {
        Args: { account_id: string }
        Returns: undefined
      }
      create_upload_status: {
        Args: { user_id: string; file_name: string; total_rows: number }
        Returns: string
      }
      fix_account_products_amount_invested: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      get_account_maturity_analysis: {
        Args: { p_account_id: string }
        Returns: {
          bucket_type: string
          timeline_bucket: string
          total_notional_value: number
          return_to_mtm_pct: number
          return_to_mtm_dollars: number
          return_to_intrinsic_pct: number
          return_to_intrinsic_dollars: number
        }[]
      }
      get_advisor_maturity_analysis: {
        Args: { p_advisor_id: string }
        Returns: {
          bucket_type: string
          timeline_bucket: string
          total_notional_value: number
          return_to_mtm_pct: number
          return_to_mtm_dollars: number
          return_to_intrinsic_pct: number
          return_to_intrinsic_dollars: number
          cusip: string
          return_type: string
        }[]
      }
      get_advisor_strategy_mix_report: {
        Args: { advisor_id_param: string }
        Returns: {
          client_name: string
          strategy_name: string
          account_value: number
          core_growth_amount: number
          core_defensive_amount: number
          abstract_amount: number
          unmapped_amount: number
          core_growth_percentage: number
          core_defensive_percentage: number
          abstract_percentage: number
          unmapped_percentage: number
          target_core_growth_percentage: number
          target_core_defensive_percentage: number
          target_abstract_max_percentage: number
          core_growth_percentage_diff: number
          core_defensive_percentage_diff: number
          abstract_percentage_diff: number
          core_growth_amount_diff: number
          core_defensive_amount_diff: number
          abstract_amount_diff: number
        }[]
      }
      get_advisor_strategy_mix_report_with_deployment: {
        Args: { advisor_id_param: string }
        Returns: {
          client_name: string
          strategy_name: string
          account_value: number
          core_growth_amount: number
          core_defensive_amount: number
          abstract_amount: number
          unmapped_amount: number
          core_growth_percentage: number
          core_defensive_percentage: number
          abstract_percentage: number
          unmapped_percentage: number
          target_core_growth_percentage: number
          target_core_defensive_percentage: number
          target_abstract_max_percentage: number
          core_growth_percentage_diff: number
          core_defensive_percentage_diff: number
          abstract_percentage_diff: number
          core_growth_amount_diff: number
          core_defensive_amount_diff: number
          abstract_amount_diff: number
          amount_available_to_deploy: number
          deployment_recommendation_growth: number
          deployment_recommendation_defensive: number
          simulated_total_value: number
          simulated_core_growth_amount: number
          simulated_core_defensive_amount: number
          simulated_abstract_amount: number
          simulated_core_growth_percentage: number
          simulated_core_defensive_percentage: number
          simulated_abstract_percentage: number
        }[]
      }
      get_maturity_bucket: {
        Args: {
          p_mtm_price: number
          p_is_income_note: boolean
          p_num_no_call_periods: number
        }
        Returns: string
      }
      get_raw_luma_data_columns: {
        Args: Record<PropertyKey, never>
        Returns: string[]
      }
      get_timeline_bucket: {
        Args: { p_date: string }
        Returns: string
      }
      get_user_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      insert_raw_luma_data: {
        Args: { data: Json }
        Returns: undefined
      }
      insert_raw_luma_data_batch: {
        Args: { data: Json }
        Returns: undefined
      }
      is_super_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      process_raw_luma_update: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      process_raw_luma_update_batch: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      run_maturity_data_update: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      truncate_raw_luma_data: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_client_account_values: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_products_from_luma: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_products_with_maturity_data: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_upload_status: {
        Args: {
          status_id: string
          processed: number
          status_text?: string
          error_message?: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

export interface TextInteractionOptions {
    /**
     * Whether text interaction should be enabled or disabled.
     * Disabling suppresses the magnifier lens that Apple
     * reintroduced with iOS 15.
     * 
     * iOS only 
     */
    enabled: boolean;
}

export interface TextInteractionResult {
    /**
     * true if supported (>= iOS 14.5), false if not
     */
    success: boolean
}

export interface TextInteractionPlugin {
  /**
   * Toggle text interaction (selection) on the Capacitor WebView.
   * 
   * @param {TextInteractionOptions} options
   * @returns {Promise<TextInteractionResult>}
   */
  toggle(options: TextInteractionOptions): Promise<TextInteractionResult>;
}

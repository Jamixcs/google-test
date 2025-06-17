// src/types/google-gsi.d.ts
// 參考 Google Identity Services (GSI) Client Library 的全域對象聲明
// 注意：這是一個簡化版，只包含你可能用到的部分。
// 如果需要更完整的類型，可以考慮尋找社區維護的 @types/google-one-tap 這樣的包，
// 但通常不需要為了這個單純的全局變量導入而安裝整個包。

declare namespace google {
  namespace accounts {
    namespace id {
      interface IdConfiguration {
        client_id: string
        callback: (response: any) => void // response: CredentialResponse
        auto_select?: boolean
        // ... 其他配置選項，如果你使用它們
      }

      interface RenderButtonConfiguration {
        type?: string
        theme?: string
        size?: string
        text?: string
        shape?: string
        width?: string
        logo_alignment?: string
        locale?: string
        click_listener?: () => void
        // ... 其他按鈕自定義選項
      }

      function initialize(config: IdConfiguration): void
      function renderButton(parentElement: HTMLElement, config?: RenderButtonConfiguration): void
      function prompt(callback?: (notification: any) => void): void
      function revoke(client_id: string | null | undefined, callback: (response: any) => void): void
      function disableAutoSelect(): void
    }
  }
}

// 可選：如果你直接使用 CredentialResponse 類型，可以在此聲明
// interface CredentialResponse {
//   credential: string;
//   select_by: string;
//   // ... 其他 GSI 響應屬性
// }

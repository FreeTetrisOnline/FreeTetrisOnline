declare namespace Types {
  export interface Map<K = string, V = any> {
    [key: K]: V;
  }
}

// Chrome 扩展 API 类型声明文件
// 用于解决 TypeScript 类型检查问题

// 声明 Chrome 扩展程序 API
declare namespace chrome {
  // 标签页管理 API
  namespace tabs {
    // 创建新标签页的方法
    function create(createProperties: { url: string }): void;
  }

  // 窗口管理 API
  namespace windows {
    interface CreateData {
      url: string;
      type?: string;
      width?: number;
      height?: number;
      left?: number;
      top?: number;
      focused?: boolean;
    }
    // 创建新窗口的方法
    function create(createData: CreateData): Promise<any>;
  }
}

// 全局窗口对象声明
declare interface Window {
  close(): void;
}

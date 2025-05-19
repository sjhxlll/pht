'use client';
import { useState, ChangeEvent } from 'react';

export default function Home() {
  const [baseType, setBaseType] = useState<'white' | 'black'>('white');
  const [invert, setInvert] = useState(true);
  const [files, setFiles] = useState<FileList | null>(null);

  return (
    <div className="w-full max-w-sm md:max-w-3xl">
      <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm overflow-hidden p-0">
        <div className="grid p-0 grid-cols-1 md:grid-cols-2">
          <form className="p-6 md:p-8 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">拼好图 | PINHAOTU.TOP</h1>
                <p className="text-muted-foreground text-balance">拼好图，吃好饭</p>
              </div>
              <label className="text-muted-foreground">底片类型</label>
              {['white', 'black'].map(type => (
                <div key={type} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3.5 cursor-pointer ring-2 ring-black/80">
                  <input
                    type="radio"
                    name="baseType"
                    value={type}
                    checked={baseType === type}
                    onChange={() => setBaseType(type as 'white' | 'black')}
                    className="accent-black mr-1 pointer-events-none"
                  />
                  <label className="flex items-center gap-2 text-sm font-medium cursor-pointer select-none" htmlFor={type}>{type === 'white' ? '白色底片' : '黑色底片'}</label>
                </div>
              ))}
              <label className="text-muted-foreground">成片效果</label>
              <div className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3.5">
                <input
                  id="invert"
                  type="checkbox"
                  checked={invert}
                  onChange={e => setInvert(e.target.checked)}
                  className="accent-black w-4 h-4"
                />
                <label htmlFor="invert" className="ml-2 text-sm font-medium cursor-pointer">反转底片</label>
              </div>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e: ChangeEvent<HTMLInputElement>) => setFiles(e.target.files)}
                className="hidden"
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <button className="btn-outline" type="button" onClick={() => document.querySelector('input[type=file]')?.click()}>
                选择图片
              </button>
              <button className="btn-primary" type="button" disabled={!files}>
                合成
              </button>
            </div>
          </form>
          <div className="aspect-[3/4] bg-muted relative flex items-center justify-center">
            <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden flex items-center justify-center">
              <img src="/placeholder.svg" alt="占位图" className="object-cover w-full h-full opacity-60" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-muted-foreground text-center text-xs mt-4">
        © 2025 <a href="https://pinhaotu.top" className="underline underline-offset-4 hover:text-primary">PINHAOTU.TOP</a> All Rights Reserved
      </div>
    </div>
  );
}
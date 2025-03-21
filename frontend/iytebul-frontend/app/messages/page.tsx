"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Home, LogOut, Mail, Menu, Paperclip, Search, Send, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

export default function MessagesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedChat, setSelectedChat] = useState<string | null>("Ahmet Yılmaz")
  const [mobileView, setMobileView] = useState<"list" | "chat">("list")

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-[#B01E28] px-4 text-white md:px-6">
        <div className="flex items-center gap-2">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] p-0">
              <div className="flex h-16 items-center border-b bg-[#B01E28] px-6">
                <div className="flex items-center gap-2 text-white">
                  <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="İYTEBul Logo" />
                  <span className="text-xl font-bold">İYTEBul</span>
                </div>
              </div>
              <nav className="grid gap-2 p-4">
                <Link
                  href="/home"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Home className="h-5 w-5" />
                  Ana Sayfa
                </Link>
                <Link
                  href="/messages"
                  className="flex items-center gap-2 rounded-lg bg-accent px-3 py-2 text-accent-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Mail className="h-5 w-5" />
                  Mesajlar
                  <Badge className="ml-auto bg-[#B01E28]">3</Badge>
                </Link>
                <Link
                  href="/profile"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="h-5 w-5" />
                  Profil
                </Link>
                <Separator />
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LogOut className="h-5 w-5" />
                  Çıkış Yap
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/home" className="flex items-center gap-2">
            <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="İYTEBul Logo" />
            <span className="text-xl font-bold hidden md:inline-block">İYTEBul</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 border-2 border-white">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
            <AvatarFallback>HU</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar - Desktop */}
        <aside className="hidden w-[240px] flex-col border-r bg-background md:flex">
          <nav className="grid gap-2 p-4">
            <Link
              href="/home"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
            >
              <Home className="h-5 w-5" />
              Ana Sayfa
            </Link>
            <Link
              href="/messages"
              className="flex items-center gap-2 rounded-lg bg-accent px-3 py-2 text-accent-foreground"
            >
              <Mail className="h-5 w-5" />
              Mesajlar
              <Badge className="ml-auto bg-[#B01E28] text-white">3</Badge>
            </Link>
            <Link
              href="/profile"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
            >
              <User className="h-5 w-5" />
              Profil
            </Link>
            <Separator className="my-2" />
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
            >
              <LogOut className="h-5 w-5" />
              Çıkış Yap
            </Link>
          </nav>
        </aside>

        {/* Chat List - Mobile & Desktop */}
        <div className={`border-r ${mobileView === "chat" ? "hidden" : "block"} md:block md:w-[300px]`}>
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Mesajlar</h2>
            <div className="relative mt-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Mesaj ara..." className="w-full pl-8" />
            </div>
          </div>
          <ScrollArea className="h-[calc(100vh-9rem)]">
            {["Ahmet Yılmaz", "Zeynep Kaya", "Mehmet Demir"].map((name, index) => (
              <div
                key={name}
                className={`p-3 border-b hover:bg-accent/50 cursor-pointer ${
                  selectedChat === name ? "bg-accent" : index < 2 ? "bg-accent/20" : ""
                }`}
                onClick={() => {
                  setSelectedChat(name)
                  setMobileView("chat")
                }}
              >
                <div className="flex gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt={name} />
                    <AvatarFallback>
                      {name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex justify-between items-center">
                      <div className="font-medium truncate">{name}</div>
                      <div className="text-xs text-muted-foreground whitespace-nowrap">
                        {index === 0 ? "10 dk önce" : index === 1 ? "2 saat önce" : "Dün"}
                      </div>
                    </div>
                    <div className="text-sm truncate">
                      {index < 2 && <span className="inline-block h-2 w-2 rounded-full bg-[#B01E28] mr-1"></span>}
                      {index === 0
                        ? "Merhaba, laptop çantanızı buldum. Nerede buluşabiliriz?"
                        : index === 1
                          ? "Teşekkürler, yarın kampüste olacağım."
                          : "Anahtarlığı teslim aldım, çok teşekkürler!"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>

        {/* Chat Area */}
        {selectedChat && (
          <div className={`flex-1 flex flex-col ${mobileView === "list" ? "hidden" : "flex"} md:flex`}>
            <div className="border-b p-3 flex items-center gap-3">
              {mobileView === "chat" && (
                <Button variant="ghost" size="icon" onClick={() => setMobileView("list")} className="md:hidden">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              )}
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt={selectedChat} />
                <AvatarFallback>
                  {selectedChat
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="font-medium">{selectedChat}</div>
            </div>

            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {selectedChat === "Ahmet Yılmaz" ? (
                  <>
                    <div className="flex justify-start">
                      <div className="bg-accent rounded-lg p-3 max-w-[80%]">
                        <p>Merhaba, laptop çantanızı kütüphanede buldum.</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-accent rounded-lg p-3 max-w-[80%]">
                        <p>İçinde laptop ve notlar var, sizin mi?</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-[#B01E28] text-white rounded-lg p-3 max-w-[80%]">
                        <p>Evet, benim! Çok teşekkür ederim, nerede buluşabiliriz?</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-accent rounded-lg p-3 max-w-[80%]">
                        <p>Merhaba, laptop çantanızı buldum. Nerede buluşabiliriz?</p>
                      </div>
                    </div>
                  </>
                ) : selectedChat === "Zeynep Kaya" ? (
                  <>
                    <div className="flex justify-start">
                      <div className="bg-accent rounded-lg p-3 max-w-[80%]">
                        <p>Merhaba, kaybettiğiniz kitabı buldum.</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-[#B01E28] text-white rounded-lg p-3 max-w-[80%]">
                        <p>Harika! Ne zaman müsait olursunuz?</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-accent rounded-lg p-3 max-w-[80%]">
                        <p>Yarın öğleden sonra kampüsteyim.</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-[#B01E28] text-white rounded-lg p-3 max-w-[80%]">
                        <p>Teşekkürler, yarın kampüste olacağım.</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-start">
                      <div className="bg-accent rounded-lg p-3 max-w-[80%]">
                        <p>Merhaba, anahtarlığınızı buldum.</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-[#B01E28] text-white rounded-lg p-3 max-w-[80%]">
                        <p>Çok teşekkür ederim! Ne zaman alabilirim?</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-accent rounded-lg p-3 max-w-[80%]">
                        <p>Şimdi kütüphanedeyim, isterseniz buraya gelebilirsiniz.</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-[#B01E28] text-white rounded-lg p-3 max-w-[80%]">
                        <p>Anahtarlığı teslim aldım, çok teşekkürler!</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </ScrollArea>

            <div className="border-t p-3">
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Input placeholder="Mesajınızı yazın..." className="flex-1" />
                <Button className="bg-[#B01E28] hover:bg-[#8a1720]">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


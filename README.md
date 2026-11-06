# Coursera Study Enhancements & Academic Automation Suite

Tổng hợp bộ công cụ và tiện ích trình duyệt hỗ trợ tối ưu hóa trải nghiệm học tập trực tuyến trên **Coursera** và **Studocu**, bao gồm **Tampermonkey Userscript** khôi phục quyền thao tác văn bản và các tiện ích mở rộng tự động hóa.

---

## 📌 Các Thành Phần Cốt Lõi

### 1. Userscript Chống Khóa Sao Chép Coursera (`chong-copy-coursera.user.js`)
- **Tác giả phát triển**: Cao Đức Trung (`TrungCao`)
- **Vấn đề giải quyết**: Nền tảng Coursera kích hoạt các bộ lắng nghe sự kiện (`copy`, `cut`, `contextmenu`, `selectstart`) nhằm ngăn chặn sinh viên bôi đen hoặc sao chép câu hỏi để tra cứu tài liệu học tập.
- **Cơ chế hoạt động**:
  - Tự động chặn (`event.stopPropagation()`, `event.stopImmediatePropagation()`) tất cả các sự kiện khóa chuột phải và sao chép.
  - Khôi phục thuộc tính CSS `user-select: text !important` trên toàn bộ cây DOM.
  - Kích hoạt lại hoàn toàn tổ hợp phím tắt `Ctrl + C`, `Ctrl + A` và menu chuột phải.

### 2. Tiện Ích AutoCoursera (`extensions/autocoursera/`)
- Tiện ích mở rộng Google Chrome (Manifest V3) hỗ trợ học tập thông minh.
- Tự động hóa quá trình điều hướng video bài giảng, ghi chú tóm tắt và hỗ trợ trợ lý AI giải thích câu hỏi khó.

### 3. Tiện Ích Mở Khóa Tài Liệu Studocu (`extensions/studocu-unblur/`)
- Gỡ bỏ lớp mờ làm nhòe (CSS Blur Filter) và cửa sổ yêu cầu nâng cấp tài khoản trả phí trên trang Studocu.
- Cho phép sinh viên xem trực tiếp toàn bộ tài liệu học tập và đề thi mẫu không bị gián đoạn.

### 4. Dữ Liệu Ngân Hàng Câu Hỏi Mẫu (`coursera-module-data/`)
- Dữ liệu câu hỏi trắc nghiệm định dạng JSON chuẩn hóa theo từng Module bài học (`01-Module-1.json` đến `04-Module-4.json`).

---

## 📂 Cấu trúc Thư mục

```text
coursera-study-enhancements/
├── tampermonkey-userscripts/
│   └── chong-copy-coursera.user.js   # Script Tampermonkey chính
├── extensions/
│   ├── autocoursera/                  # Tiện ích AutoCoursera Chrome Extension
│   └── studocu-unblur/                # Tiện ích mở khóa xem tài liệu Studocu
├── coursera-module-data/              # Dữ liệu ngân hàng câu hỏi các module
│   ├── 01-Module-1.json
│   ├── 02-Module-2.json
│   ├── 03-Module-3.json
│   └── 04-Module-4.json
└── README.md
```

---

## 🚀 Hướng dẫn Cài đặt & Sử dụng

### Cài đặt Userscript Chống Khóa Copy
1. Cài đặt tiện ích mở rộng [Tampermonkey](https://www.tampermonkey.net/) trên trình duyệt Chrome / Edge / Firefox.
2. Mở Tampermonkey Dashboard -> chọn **Thêm script mới (Add Script)**.
3. Dán toàn bộ nội dung file `tampermonkey-userscripts/chong-copy-coursera.user.js` và nhấn **Save (Ctrl + S)**.
4. Tải lại trang Coursera, bạn có thể tự do bôi đen văn bản và sao chép như bình thường.

### Cài đặt Tiện ích AutoCoursera (Developer Mode)
1. Mở trình duyệt và truy cập `chrome://extensions/`.
2. Bật chế độ **Nhà phát triển (Developer mode)** ở góc trên bên phải.
3. Nhấn **Tải tiện ích đã giải nén (Load unpacked)** và trỏ vào thư mục `extensions/autocoursera`.

---

## 👤 Tác giả & Tuyên bố Miễn trừ Trách nhiệm
- **Tác giả**: Cao Đức Trung (`namnguyenit`)
- **Mục đích**: Phục vụ mục đích học tập cá nhân, nghiên cứu tương tác người máy (HCI) và tối ưu khả năng tiếp cận kiến thức.

## وب سرویس کامل لیست استان و شهر های ایران به همراه موقعیت جغرافیایی

### نحوه استفاده از API

- **دریافت لیست تمام استان‌ های ایران**  
  `GET` [https://iranplacesapi.liara.run/api/provinces](https://iranplacesapi.liara.run/api/provinces)

- **دریافت لیست تمام شهر های ایران**  
  `GET` [https://iranplacesapi.liara.run/api/cities](https://iranplacesapi.liara.run/api/cities)

- **دریافت شهر بر اساس آیدی**  
  `GET` [https://iranplacesapi.liara.run/api/cities/id/[id]](https://iranplacesapi.liara.run/api/cities/id/[id])

- **دریافت شهر بر اساس نام**  
  `GET` [https://iranplacesapi.liara.run/api/cities/name/[name]](https://iranplacesapi.liara.run/api/cities/name/[name])

- **دریافت استان بر اساس آیدی**  
  `GET` [https://iranplacesapi.liara.run/api/provinces/id/[id]](https://iranplacesapi.liara.run/api/provinces/id/[id])

- **دریافت استان بر اساس نام**  
  `GET` [https://iranplacesapi.liara.run/api/provinces/name/[name]](https://iranplacesapi.liara.run/api/provinces/name/[name])

- **دریافت تمام شهرهای یک استان با آیدی**  
  `GET` [https://iranplacesapi.liara.run/api/provinces/id/[id]/cities](https://iranplacesapi.liara.run/api/provinces/id/[id]/cities)  
  _آیدی استان باید وارد شود._

- **دریافت تمام شهرهای یک استان با نام**  
  `GET` [https://iranplacesapi.liara.run/api/provinces/name/[name]/cities](https://iranplacesapi.liara.run/api/provinces/name/[name]/cities)  
  _نام استان باید وارد شود._

- **دریافت اسم استان یک شهر با آیدی**  
  `GET` [https://iranplacesapi.liara.run/api/cities/id/[id]/province](https://iranplacesapi.liara.run/api/cities/id/[id]/province)  
  _آیدی شهر باید وارد شود._

- **دریافت اسم استان یک شهر با نام**  
  `GET` [https://iranplacesapi.liara.run/api/cities/name/[name]/province](https://iranplacesapi.liara.run/api/cities/name/[name]/province)  
  _نام شهر باید وارد شود._

---

### تشکر ویژه

لیست استان ها و شهرها با استفاده از داده های [این ریپازیتوری](https://github.com/sajaddp/list-of-cities-in-Iran) به دست آمده.

با تشکر از توسعه دهندگان این ریپازیتوری.

---

### نکته

موقعیت جغرافیایی استان ها و شهرها با کمک هوش مصنوعی (ChatGPT) اضافه شده است.

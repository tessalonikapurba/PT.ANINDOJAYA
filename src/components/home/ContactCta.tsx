import { contact } from '@/data/homeContent';
import { useHome } from './useHome';

const ContactCta = () => {
  const { isId } = useHome();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#3b1a72] text-white"
    >
      {/* Yellow accent */}
      <div
        className="absolute inset-y-0 left-0 w-1.5 bg-[#f4bd0a]"
        aria-hidden
      />

      <div className="mx-auto max-w-[1280px] px-5 py-9 lg:px-8 lg:py-11">

        {/* Header */}
        <div className="mb-6">
          <p className="eyebrow on-dark text-[10px]">
            {isId ? 'Hubungi Kami' : 'Contact Us'}
          </p>

          <h2
            className="
              mt-1.5
              max-w-[750px]
              text-3xl
              font-bold
              uppercase
              leading-[1.03]
              tracking-[-0.02em]
              sm:text-4xl
              lg:text-5xl
            "
          >
            {isId ? 'Mari bekerja sama' : "Let's work together"}
          </h2>

          <p className="mt-2 max-w-[600px] text-sm leading-5 text-white/75 lg:text-base">
            {isId
              ? 'Bicarakan kebutuhan bahan baku Anda dengan tim kami.'
              : 'Talk to our team about your ingredient requirements.'}
          </p>
        </div>

        {/* Form + Contact Information */}
        <div className="grid gap-7 lg:grid-cols-12 lg:gap-9">

          {/* FORM */}
          <div className="lg:col-span-8">
            <form className="space-y-3">

              {/* Name + Company */}
              <div className="grid gap-3 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="full_name"
                    className="mb-1 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#f4bd0a]"
                  >
                    {isId ? 'Nama Lengkap' : 'Full Name'}
                  </label>

                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    placeholder={
                      isId ? 'Masukkan nama lengkap' : 'Enter your full name'
                    }
                    className="
                      w-full
                      rounded-[12px]
                      border
                      border-white/20
                      bg-white
                      px-3.5
                      py-2.5
                      text-sm
                      text-[#2a1259]
                      outline-none
                      placeholder:text-[#9995a3]
                      transition-all
                      focus:border-[#f4bd0a]
                      focus:ring-2
                      focus:ring-[#f4bd0a]/20
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="company_name"
                    className="mb-1 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#f4bd0a]"
                  >
                    {isId ? 'Nama Perusahaan' : 'Company Name'}
                  </label>

                  <input
                    id="company_name"
                    name="company_name"
                    type="text"
                    placeholder={
                      isId
                        ? 'Masukkan nama perusahaan'
                        : 'Enter your company name'
                    }
                    className="
                      w-full
                      rounded-[12px]
                      border
                      border-white/20
                      bg-white
                      px-3.5
                      py-2.5
                      text-sm
                      text-[#2a1259]
                      outline-none
                      placeholder:text-[#9995a3]
                      transition-all
                      focus:border-[#f4bd0a]
                      focus:ring-2
                      focus:ring-[#f4bd0a]/20
                    "
                  />
                </div>

              </div>

              {/* Email + Phone */}
              <div className="grid gap-3 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#f4bd0a]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={
                      isId ? 'Masukkan alamat email' : 'Enter your email'
                    }
                    className="
                      w-full
                      rounded-[12px]
                      border
                      border-white/20
                      bg-white
                      px-3.5
                      py-2.5
                      text-sm
                      text-[#2a1259]
                      outline-none
                      placeholder:text-[#9995a3]
                      transition-all
                      focus:border-[#f4bd0a]
                      focus:ring-2
                      focus:ring-[#f4bd0a]/20
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#f4bd0a]"
                  >
                    {isId ? 'Nomor Telepon' : 'Phone Number'}
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={
                      isId
                        ? 'Masukkan nomor telepon'
                        : 'Enter your phone number'
                    }
                    className="
                      w-full
                      rounded-[12px]
                      border
                      border-white/20
                      bg-white
                      px-3.5
                      py-2.5
                      text-sm
                      text-[#2a1259]
                      outline-none
                      placeholder:text-[#9995a3]
                      transition-all
                      focus:border-[#f4bd0a]
                      focus:ring-2
                      focus:ring-[#f4bd0a]/20
                    "
                  />
                </div>

              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#f4bd0a]"
                >
                  {isId ? 'Subjek' : 'Subject'}
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder={
                    isId
                      ? 'Contoh: Permintaan bahan baku farmasi'
                      : 'Example: Pharmaceutical ingredient inquiry'
                  }
                  className="
                    w-full
                    rounded-[12px]
                    border
                    border-white/20
                    bg-white
                    px-3.5
                    py-2.5
                    text-sm
                    text-[#2a1259]
                    outline-none
                    placeholder:text-[#9995a3]
                    transition-all
                    focus:border-[#f4bd0a]
                    focus:ring-2
                    focus:ring-[#f4bd0a]/20
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#f4bd0a]"
                >
                  {isId ? 'Pesan' : 'Message'}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder={
                    isId
                      ? 'Tuliskan kebutuhan atau pertanyaan Anda...'
                      : 'Tell us about your requirements or inquiry...'
                  }
                  className="
                    w-full
                    resize-none
                    rounded-[12px]
                    border
                    border-white/20
                    bg-white
                    px-3.5
                    py-2.5
                    text-sm
                    text-[#2a1259]
                    outline-none
                    placeholder:text-[#9995a3]
                    transition-all
                    focus:border-[#f4bd0a]
                    focus:ring-2
                    focus:ring-[#f4bd0a]/20
                  "
                />
              </div>

              {/* Submit */}
              <button
                type="button"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-[10px]
                  bg-[#f4bd0a]
                  px-5
                  py-2.5
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-[#2a1259]
                  transition-all
                  hover:bg-[#ffd34d]
                "
              >
                {isId ? 'Kirim Pertanyaan' : 'Send Inquiry'}
                <span className="text-base leading-none">→</span>
              </button>

            </form>
          </div>

          {/* CONTACT INFORMATION */}
          <div
            className="
              border-t
              border-white/15
              pt-5
              lg:col-span-4
              lg:border-l
              lg:border-t-0
              lg:pl-7
              lg:pt-0
            "
          >
            <div className="space-y-5">

              <div>
                <p className="eyebrow on-dark text-[10px]">
                  Email
                </p>

                <a
                  href={`mailto:${contact.email}`}
                  className="mt-1 block text-sm text-white transition-colors hover:text-[#f4bd0a]"
                >
                  {contact.email}
                </a>
              </div>

              <div>
                <p className="eyebrow on-dark text-[10px]">
                  {isId ? 'Telepon' : 'Phone'}
                </p>

                <p className="mt-1 text-sm text-white">
                  {contact.phones[0]}
                </p>
              </div>

              <div>
                <p className="eyebrow on-dark text-[10px]">
                  {isId ? 'Jam Kerja' : 'Business Hours'}
                </p>

                <p className="mt-1 text-sm leading-5 text-white">
                  {isId
                    ? contact.hours.id
                    : contact.hours.en}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCta;
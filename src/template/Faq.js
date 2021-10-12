import useFetch from "./useFetch";

const Faq = () => {
    const data  = useFetch('http://localhost:2020/faqs');
    return (
      <div class="tmp-body">
        <div class="contact-form " >
            <h1>FAQ'S</h1>
            <div class="form-rapper faqs-rapper">
                {data && data.text}
            </div>
        </div>
      </div>
      );
}
 
export default Faq;

<label for="country">🌍 Select your country:</label>
<select id="country" name="country" class="dino-country">
  <option value="">-- Choose your country --</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="UK">United Kingdom</option>
  <option value="AU">Australia</option>
  <option value="IN">India</option>
  <option value="JP">Japan</option>
  <option value="BR">Brazil</option>
  <option value="MX">Mexico</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
  <option value="AR">Argentina</option>
<option value="CL">Chile</option>
<option value="PE">Peru</option>
<option value="CO">Colombia</option>
<option value="VE">Venezuela</option>
<option value="ES">Spain</option>
<option value="IT">Italy</option>
<option value="SE">Sweden</option>
<option value="NO">Norway</option>
<option value="FI">Finland</option>
<option value="PL">Poland</option>
<option value="NL">Netherlands</option>
<option value="BE">Belgium</option>
<option value="PT">Portugal</option>
<option value="CH">Switzerland</option>
<option value="AT">Austria</option>
<option value="ZA">South Africa</option>
<option value="EG">Egypt</option>
<option value="NG">Nigeria</option>
<option value="KE">Kenya</option>
<option value="CN">China</option>
<option value="KR">South Korea</option>
<option value="PH">Philippines</option>
<option value="TH">Thailand</option>
<option value="VN">Vietnam</option>
<option value="SG">Singapore</option>
<option value="NZ">New Zealand</option>
<option value="TR">Turkey</option>
<option value="SA">Saudi Arabia</option>

<script>
  function getSelectedCountry() {
    const country = document.getElementById("country").value;
    console.log("🦖 Dinosaurmod — Selected country:", country);
    return country;
  }
</script>

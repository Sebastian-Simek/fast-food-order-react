
export default function Instructions({ setInstructionForm, instructionForm, instructions, setInstructions }) {
    
  function handleSubmit(e) {
    e.preventDefault();
    setInstructions([...instructions, instructionForm]);
    
    setInstructionForm('');
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
      Modifications:
        <input value={instructionForm} onChange={e => setInstructionForm(e.target.value)}/>
        <button>Submit</button>
      </form>
    </section>
  );
}
